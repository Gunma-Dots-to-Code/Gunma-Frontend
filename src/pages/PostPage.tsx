import React, { useState } from 'react';

const PostPage = () => {
  // 投稿フォームの各フィールドのステート
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // フォームの送信処理
  const handleSubmit = (e) => {
    e.preventDefault();
    // フォームの入力値を使用して投稿の作成処理を実装する
    console.log('Title:', title);
    console.log('Content:', content);
    // ここでAPIを呼び出して投稿を作成するなどの処理を行う
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          タイトル
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
          内容
        </label>
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        投稿する
      </button>
    </form>
  );
};

export default PostPage;
