import React from "react";
import BreadCrumb from "./BreadCrumb";
import NextImage from "next/image";
import BaseInput from "./BaseInput";

const Header = () => {
	return (
		<div className="bg-gray-50">
			<div className="pt-5 px-6 lg:px-8">
				<div className="flex items-center justify-between max-w-2xl mx-auto">
					<a className="" href="/">
						<NextImage
							src="/marinote.png"
							alt="marinote logo"
							width={250}
							height={150}
							className=""
						/>
					</a>
					<div className="flex justify-end">
						<BaseInput />
						<img
							className="rounded-full w-9 h-9 ml-3"
							src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
							alt="profile picture"
						/>
					</div>
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
