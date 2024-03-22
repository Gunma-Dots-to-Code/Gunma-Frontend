import { useState } from "react";
import Layout from "../common/Layout";
import AnswerCard from "./AnswerCard";
import Question from "./QuestionCard";
import CreateAnswerCard from "./CreateAnswerModal";

const QuestionAnswer = ({
  question,
  answers,
}: {
  question: Question;
  answers: Answer[];
}) => {
  const [showAnswerForm, setShowAnswerForm] = useState(false);

  const handleAnswerClick = () => {
    setShowAnswerForm(true);
  };
  return (
    <Layout>
      <div className="border-b border-gray-300 mb-12">
        <Question question={question} />
      </div>
      <div className="text-center mb-5">
        <button
          onClick={handleAnswerClick}
          className="bg-primaryBlue text-white px-6 py-2 rounded font-semibold hover:bg-primary-dark"
        >
          質問に回答する
        </button>
        {showAnswerForm && (
          <CreateAnswerCard
            questionId={question.ID}
            questionTitle={question.QuestionTitle}
            questionContent={question.QuestionContent}
            categoryId={question.CategoryID}
            onClose={() => setShowAnswerForm(false)}
          />
        )}
      </div>
      <AnswerCard answers={answers} />
    </Layout>
  );
};

export default QuestionAnswer;
