import Layout from "../common/Layout";
import QuestionForm from "./QuestionForm";

const QuestionPage=()=> {
  return (
    <Layout>
        <h1 className="text-xl font-bold text-center my-4">相談内容を入力する</h1>
        <QuestionForm />
    </Layout>
  );
}
export default QuestionPage;