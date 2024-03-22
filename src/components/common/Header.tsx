import React from "react";
import BreadCrumb from "./BreadCrumb";

const Header = () => {
	return (
		<div>
			{/* TODO: ヘッダーとパンクズリストをw-2xlの左揃えで */}
			<div className="flex flex-col py-5 px-6 lg:px-8 border-b">
				<div className="flex items-center justify-between lg:justify-start max-w-2xl mx-auto">
					<a
						className="text-lg font-bold tracking-tighter text-[#448cea] transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8 w-full text-left"
						href="/"
					>
						Brain Share
					</a>
				</div>
			</div>
			<nav className="flex border-b" aria-label="Breadcrumb">
				<BreadCrumb />
			</nav>
		</div>
	);
};

export default Header;
