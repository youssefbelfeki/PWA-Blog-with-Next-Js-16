"use client";

import { useEffect, useState } from "react";
import { Article } from "@/lib/types";
import { fetchNews } from "@/lib/api";
import { NewsFilters } from "./news-filters";
import { InfiniteNews } from "./infinite-news";
import { NewsSkeleton } from "./news-skeleton";

export default function NewsClient() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchNews()
      .then(setArticles)
      .catch(() => setError("Unable to load news"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <NewsSkeleton />;
  if (error) throw new Error(error);

  return (
    <>
      <NewsFilters />
      <InfiniteNews articles={articles} />
    </>
  );
}
