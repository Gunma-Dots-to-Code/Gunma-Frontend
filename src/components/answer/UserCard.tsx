import React from "react";

type UserCardProps = {
	userName: string;
	isQuestioner: boolean;
};
const UserCard: React.FC<UserCardProps> = ({ userName, isQuestioner }) => {
	return (
		<div className="rounded overflow-hidden">
			{isQuestioner ? (
				<div className="flex items-center py-2">
					<img
						className="rounded-full w-9 h-9 mr-3"
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
						alt="回答者のプロフィール画像"
					/>
					<p className="text-gray-700 text-l">{userName}</p>
				</div>
			) : (
				<div className="flex items-center py-2">
					<img
						className="rounded-full w-9 h-9 mr-3"
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
						alt="質問者のプロフィール画像"
					/>
					<p className="text-gray-700 text-l">Yamada Yoko</p>
				</div>
			)}
		</div>
	);
};

export default UserCard;
