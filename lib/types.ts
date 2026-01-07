export interface ArticleSource {
  id: string | null;
  name: string;
}

export interface Article {
  title: string;
  description: string | null;
  content: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  source: ArticleSource;
}
