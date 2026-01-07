import { Article } from "./types";

export async function fetchNews(): Promise<Article[]> {
  const res = await fetch("/api/news");

  if (!res.ok) {
    throw new Error("Failed to load news");
  }

  return res.json();
}
