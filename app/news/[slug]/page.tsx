
import { Article } from "@/lib/types";
import Image from "next/image";
import { notFound } from "next/navigation";

interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

interface PageProps {
  params: {
    slug: string;
  };
}

const createSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '');
};

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;

  const res = await fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  const data: NewsApiResponse = await res.json();
  const articles: Article[] = data.articles;
  
  const article = articles.find(
    (a) => createSlug(a.title) === slug
  );

  if (!article) return notFound();

  return (
    <main className="container mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-bold">{article.title}</h1>

      <p className="text-muted-foreground">
        {article.source.name} —{" "}
        {new Date(article.publishedAt).toDateString()}
      </p>

      {article.urlToImage && (
        <Image
          src={article.urlToImage}
          alt={article.title}
          className="rounded-xl"
          width={500}
          height={500}
        />
      )}

      <p>{article.content }{ article.description}</p>

      <a
        href={article.url}
        target="_blank"
        className="text-primary underline"
      >
        Read original article
      </a>
    </main>
  );
}
