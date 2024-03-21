import Link from "next/link";
import React from "react";

// fetch data from the server

const CategoryPage = () => {
	return (
		<div>
			かてごりーぺーじ
			<div>
				<Link href="/answer/1">個々の質問</Link>
			</div>
		</div>
	);
};

export default CategoryPage;
