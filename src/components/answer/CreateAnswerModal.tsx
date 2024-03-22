import { useState } from "react";

type CreateAnswerModalProps = {
  questionId: number;
  questionTitle: string;
  questionContent: string;
  categoryId: number;
  onClose: () => void;
};
const CreateAnswerModal: React.FC<CreateAnswerModalProps> = ({
  questionId,
  questionTitle,
  questionContent,
  categoryId,
  onClose,
}) => {
  const [answer, setAnswer] = useState("");

  const [contentExpanded, setContentExpanded] = useState(false);
  const maxContentLength = 100;

  const toggleContent = () => {
    setContentExpanded(!contentExpanded);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/categories/${categoryId}/questions/${questionId}/answers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            UserID: 2, // ユーザーIDは一旦固定値
            AnswerContent: answer,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("回答の送信に失敗しました。");
      }
      setAnswer("");
      onClose();
      alert("回答を送信しました。");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      id="my-modal"
    >
      <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-2/3 lg:w-1/2 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <div className="flex justify-end pb-3">
            <div className="cursor-pointer z-50 text-right" onClick={onClose}>
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M16.2,0L9,7.2L1.8,0L0,1.8l7.2,7.2L0,16.2L1.8,18l7.2-7.2l7.2,7.2l1.8-1.8l-7.2-7.2L18,1.8L16.2,0z" />
              </svg>
            </div>
          </div>
          <div className="text-left my-8">
            <h2 className="text-md font-semibold">質問内容</h2>
            <h2 className="text-lg font-semibold mt-3">{questionTitle}</h2>
            <div>
              <p className="mt-4 text-gray-800">
                {contentExpanded
                  ? questionContent
                  : `${questionContent.substring(0, maxContentLength)}...`}
              </p>
              {questionContent.length > maxContentLength && (
                <button
                  onClick={toggleContent}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  {contentExpanded ? "折りたたむ" : "続きを読む"}
                </button>
              )}
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="回答をここに入力してください"
              className="w-full border-2 border-gray-300 p-4 rounded-lg"
              rows={4}
            />
            <div className="text-right mt-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                送信
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAnswerModal;
