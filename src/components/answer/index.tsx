import Header from "../common/Header";
import Layout from "../common/Layout";
import AnswerCard from "./AnswerCard";
import Question from "./QuestionCard";


const QuestionAnswer = () => {
    return (
        <Layout>
            <Question />
            <AnswerCard />
        </Layout>
    );
  };
  
  export default QuestionAnswer;