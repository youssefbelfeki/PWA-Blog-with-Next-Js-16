/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { Article } from "@/lib/types";

interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export async function GET() {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEWS_API_KEY}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch news" },
        { status: res.status }
      );
    }

    const data: NewsApiResponse = await res.json();

    return NextResponse.json<Article[]>(data.articles);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
