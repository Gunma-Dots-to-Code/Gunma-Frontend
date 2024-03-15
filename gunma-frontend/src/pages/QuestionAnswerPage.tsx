import React from 'react';
import Header from '../components/Header';
import UserCard from '../components/UserCard';
import Question from '../components/Question';
import Answer from '../components/Answer';

const QuestionAnswerPage = () => {
  return (
    <div>
      <Header />
      <Question />
      <Answer />
      <br />
      <Answer />
    </div>
  );
};

export default QuestionAnswerPage;
