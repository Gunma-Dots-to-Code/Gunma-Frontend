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
