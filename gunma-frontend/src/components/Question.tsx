import React, { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';

const Question = () => {
  const date = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleString('ja-JP', options);

  return (
    <section>
      <div className="flex flex-col items-start px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
          <div className="w-full mx-auto">
            <h1 className="text-2xl mb-2 font-semibold">Publicationへ記事を投稿するには？</h1>
            <p className="mb-5">{formattedDate}</p>
            <p>
              Publicationへ記事を投稿したいと思っていますが、どのようにすれば良いでしょうか？本当に困っています。教えてください
            </p>
          </div>
          <div className="flex justify-end">
            <UserCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
