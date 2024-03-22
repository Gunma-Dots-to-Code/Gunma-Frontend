import Link from "next/link";

export type QuestionItemProps = {
  questionID: number;
  questionTitle: string;
  questionContent: string;
  categoryID: number;
};
const QuestionItem: React.FC<QuestionItemProps> = ({
  questionID,
  questionTitle,
  questionContent,
  categoryID,
}) => {
  return (
    <li
      key={questionID}
      className="truncate border px-5 py-5 mb-3 rounded-md hover:bg-gray-100    hover:shadow-xm list-none"
    >
      <Link
        href={`/category/${categoryID}/question/${questionID}`}
        className="block "
      >
        <h3 className="text-lg font-semibold hover:underline">
          {questionTitle}
        </h3>
        <p className="text-gray-500 text-sm truncate">
          {questionContent.length > 40
            ? `${questionContent.substring(0, 40)}...`
            : questionContent}
        </p>
      </Link>
    </li>
  );
};

export default QuestionItem;
