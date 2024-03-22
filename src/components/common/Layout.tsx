import Head from "next/head";
import React, { ReactNode } from "react";
import Header from "./Header";

type Props = {
	children?: ReactNode;
	title?: string;
};

const Layout = ({ children, title = "質問プラットフォーム" }: Props) => (
	<div className="flex flex-col h-screen justify-between">
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
		</Head>
		<Header />
		<main className="mb-auto">
			<div className="container mx-auto px-4 mt-10 max-w-2xl">
				{children}
			</div>
		</main>
	</div>
);

export default Layout;
