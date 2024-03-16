import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';

const AnswerCard = () => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleString('ja-JP', options);

  return (
    <section>
      <div className="border border-gray-300 rounded-2xl max-w-3xl mx-auto">
        <div className="flex flex-col items-start px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div className="w-full mx-auto">
              <div className="flex justify-start">
                <UserCard />
              </div>
              <p className="mb-5">{formattedDate}</p>
              <p className="mb-5">
                Webで記事を書く場合は、記事の公開設定の「投稿先」から投稿先のPublicationを選択します。
                GitHubデプロイの場合は、記事のmarkdownファイルの先頭の設定（Front Matter）でPublication名を指定します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnswerCard;
