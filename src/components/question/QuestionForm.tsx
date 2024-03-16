// components/MyForm.js

import { useState } from 'react';

const QuestionForm = ()=> {
  const [input, setInput] = useState({
    title: '',
    content: ''
  });

//   TODO: any型を変更する
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // TODO: 送信処理をここに記述
    console.log('Submitted:', input);
  };

  return (
    <div className="max-w-2xl mx-auto p-5">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-xl font-bold mb-2">
            質問のタイトル
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={input.title}
            onChange={handleInputChange}
            required
            minLength={20}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="content" className="block text-gray-700 text-xl font-bold mb-2">
            相談内容
          </label>
          <textarea
            id="content"
            name="content"
            value={input.content}
            onChange={handleInputChange}
            rows={4}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            送信する
          </button>
        </div>
      </form>
    </div>
  );
}

export default QuestionForm;