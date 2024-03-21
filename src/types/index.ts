// user
type User = {
	ID: number;
	CreatedAt: string;
	UpdatedAt: string;
	DeletedAt: string;
	Username: string;
};

// category
type Category = {
	ID: number;
	CreatedAt: string;
	UpdatedAt: string;
	DeletedAt: string;
	CategoryName: string;
};

type CategoriesProps = {
	categories: Category[];
	error?: string;
};

// question
type Question = {
	ID: 1;
	CreatedAt: string;
	UpdatedAt: string;
	DeletedAt: boolean;
	UserID: number;
	CategoryID: number;
	QuestionTitle: string;
	QuestionContent: string;
	User: User;
	Category: Category;
};

type CategoryQuestionsProps = {
	questions: Question[];
	error?: string;
};
