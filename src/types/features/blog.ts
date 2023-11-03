export interface Category {
  title: string;
  description: string | null;
}

export interface Post {
  categories: Category[];
  // ... other fields ...
}
