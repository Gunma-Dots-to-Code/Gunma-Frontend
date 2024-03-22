import router from "next/router";
import { useState } from "react";
import { IoIosSend } from "react-icons/io";

type QuestionFormProps = {
  categoryList: Category[];
};

const QuestionForm: React.FC<QuestionFormProps> = ({ categoryList }) => {
  const [input, setInput] = useState({
    title: "",
    content: "",
    categoryId: "",
    notify: false,
    email: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setInput((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!input.categoryId) {
      alert("カテゴリを選択してください。");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/categories/${input.categoryId}/questions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            UserID: 1, // UserIDは一旦固定値
            QuestionTitle: input.title,
            QuestionContent: input.content,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      const questionId = data.ID;
      // ページにリダイレクト
      router.push(`/category/${input.categoryId}/question/${questionId}`);
    } catch (error) {
      console.error("送信エラー", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-6 ">
          <label
            htmlFor="title"
            className="block text-gray-700 text-base font-bold mb-2 flex items-end"
          >
            質問のタイトル
            <p className="ml-2 mr-2 mb-1 text-xs text-red-800 font-thin">
              (必須) 5文字以上
            </p>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={input.title}
            onChange={handleInputChange}
            required
            minLength={5}
            className="border appearance-none border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="content"
            className="block text-gray-700 text-base font-bold mb-2 flex items-end"
          >
            相談内容
            <p className="ml-2 mr-2 mb-1 text-xs text-red-800 font-thin">
              (必須) 10文字以上
            </p>
          </label>
          <textarea
            id="content"
            name="content"
            value={input.content}
            onChange={handleInputChange}
            rows={4}
            minLength={10}
            required
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
          ></textarea>
        </div>
        <div className="mb-10">
          <label
            htmlFor="category"
            className="block text-gray-700 text-base font-bold mb-2 flex items-end"
          >
            カテゴリ
            <p className="ml-2 mr-2 mb-1 text-xs text-red-800 font-thin">
              (必須)
            </p>
          </label>
          <select
            id="category"
            name="categoryId"
            value={input.categoryId}
            onChange={handleInputChange}
            required
            className="border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled>
              カテゴリーを選択してください
            </option>
            {categoryList.map((category) => (
              <option key={category.ID} value={category.ID}>
                {category.CategoryName}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-10">
          <div className="flex items-center justify-start mb-4">
            <div className="text-gray-700 font-medium mr-3">
              回答がついたらメールで知らせる
            </div>
            <label
              htmlFor="notify"
              className="flex items-center cursor-pointer"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id="notify"
                  name="notify"
                  checked={input.notify}
                  onChange={handleToggleChange}
                  className="sr-only" // チェックボックスを画面上から隠します。
                />
                <div
                  className={`block w-10 h-5 ${
                    input.notify ? "bg-blue-500" : "bg-gray-600"
                  } rounded-full`}
                ></div>
                <div
                  className={`dot absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform ${
                    input.notify ? "transform translate-x-5" : ""
                  }`}
                ></div>
              </div>
            </label>
          </div>
          {input.notify && (
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline block"
              type="email"
              name="email"
              placeholder="メールアドレス"
              value={input.email}
              onChange={handleInputChange}
              required
            />
          )}
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-primaryBlue hover:bg-blue-700 text-white font-medium py-3 font-sans px-6 rounded-lg inline-flex items-center focus:outline-none focus:shadow-outline"
          >
            送信する
            <IoIosSend className="ml-1" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionForm;
