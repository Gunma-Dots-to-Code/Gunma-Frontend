import React from "react";
import BreadCrumb from "./BreadCrumb";
import NextImage from "next/image";

const Header = () => {
	return (
		<div className="bg-gray-50">
			{/* TODO: ヘッダーとパンクズリストをw-2xlの左揃えで */}
			<div className="pt-5 px-6 lg:px-8">
				<div className="flex items-center justify-between lg:justify-start max-w-2xl mx-auto">
					<a className="" href="/">
						<NextImage
							src="/marinote.png"
							alt="marinote logo"
							width={250}
							height={150}
							className=""
						/>
					</a>
				</div>
			</div>
			<div className="border-b">
				<div className="max-w-2xl mx-auto">
					<div className="ml-2">
						<BreadCrumb />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
