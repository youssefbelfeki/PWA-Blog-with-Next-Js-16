import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default async function HomePage() {

  return (
    <main className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">📰 Crypto News</h1>
        <ThemeToggle />
      </div>
      <div className="flex gap-4">
        <Link href="/posts">
          <Button>Static Posts</Button>
        </Link>
        <Link href="/news">
          <Button>Dynamic News</Button>
        </Link>
      </div>
    </main>
  );
}
