import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div>
			Home Page
			<div>
				{/* TODO: カテゴリーIDを後でセットする */}
				<Link href="/category/1">Category</Link>
			</div>
		</div>
	);
}
