import { ThemeToggle } from "@/components/theme-toggle";
import NewsClient from "@/components/news-client";

export default async function HomePage() {

  return (
    <main className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">📰 Crypto News</h1>
        <ThemeToggle />
      </div>
      <NewsClient/>
    </main>
  );
}
