import { posts } from "@/lib/posts";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PostsPage() {
  return (
    <main className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Blog Posts</h1>
      <div className="flex flex-col md:flex-col gap-3">
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <Card className="cursor-pointer hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}