import React from "react";

type BaseTitleProps = {
	title: string;
};

const BaseTitle: React.FC<BaseTitleProps> = ({ title }) => {
	return <h1 className="text-xl font-bold text-left my-4">{title}</h1>;
};
export default BaseTitle;
