export default interface Article {
  id: number;

  title: string;
  description: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  author: ArticleAuthor;
  image: {
    url: string;
  };
  tags: {
    id: number;
    name: string;
  }[];
  youtubeLink: string;
}
interface ArticleAuthor {
  name: string;
  image: {
    url: string;
  };
  email: string;
}
export type { ArticleAuthor };
