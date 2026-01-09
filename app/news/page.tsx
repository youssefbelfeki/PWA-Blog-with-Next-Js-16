import NewsClient from "@/components/news-client";

export default function NewsPage() {
  return (
    <main className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">📰 Dynamic News</h1>
      <NewsClient />
    </main>
  );
}