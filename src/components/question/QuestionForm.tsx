import router from "next/router";
import { useState } from "react";

type QuestionFormProps = {
	categoryList: Category[];
};

const QuestionForm: React.FC<QuestionFormProps> = ({ categoryList }) => {
	const [input, setInput] = useState({
		title: "",
		content: "",
		categoryId: "",
		notify: false,
		email: "",
	});

	const handleInputChange = (
		event: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = event.target;
		setInput((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = event.target;
		setInput((prev) => ({
			...prev,
			[name]: checked,
		}));
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			const response = await fetch(
				`http://localhost:8080/categories/${input.categoryId}/questions`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						UserID: 1, // UserIDは一旦固定値
						QuestionTitle: input.title,
						QuestionContent: input.content,
					}),
				}
			);
			const data = await response.json();
			console.log(data);
			// レスポンスからquestionIdを取得
			// TODO: バックエンドが追記したらコメントアウトを外す
			const questionId = 1;
			// const questionId = data.QuestionId;
			// ページにリダイレクト
			router.push(`/category/${input.categoryId}/question/${questionId}`);
		} catch (error) {
			console.error("送信エラー", error);
		}
	};

	return (
		<div className="max-w-2xl mx-auto p-5">
			<form
				onSubmit={handleSubmit}
				className="bg-white rounded px-8 pt-6 pb-8 mb-4"
			>
				<div className="mb-4">
					<label
						htmlFor="title"
						className="block text-gray-700 text-lg font-bold mb-2"
					>
						質問のタイトル
					</label>
					<input
						type="text"
						id="title"
						name="title"
						value={input.title}
						onChange={handleInputChange}
						required
						minLength={5}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="content"
						className="block text-gray-700 text-xl font-bold mb-2"
					>
						相談内容
					</label>
					<textarea
						id="content"
						name="content"
						value={input.content}
						onChange={handleInputChange}
						rows={4}
						required
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					></textarea>
				</div>
				<div>
					<label
						htmlFor="category"
						className="block text-gray-700 text-xl font-bold mb-4"
					>
						カテゴリ
					</label>
					<select
						id="category"
						name="categoryId"
						value={input.categoryId}
						onChange={handleInputChange}
						required
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-20"
					>
						{categoryList.map((category) => (
							<option key={category.ID} value={category.ID}>
								{category.CategoryName}
							</option>
						))}
					</select>
				</div>
				<div className="mb-20">
					<label htmlFor="notify">
						回答がついたらメールで知らせる
					</label>
					{/* TODO：トグルボタンのデザインを修正する */}
					<input
						type="checkbox"
						id="notify"
						name="notify"
						checked={input.notify}
						onChange={handleToggleChange}
					/>
					{input.notify && (
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline block"
							type="email"
							name="email"
							placeholder="メールアドレス"
							value={input.email}
							onChange={handleInputChange}
							required
						/>
					)}
				</div>
				<div className="flex items-center justify-center">
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						送信する
					</button>
				</div>
			</form>
		</div>
	);
};

export default QuestionForm;
