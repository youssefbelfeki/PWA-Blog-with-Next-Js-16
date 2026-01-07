import { posts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { use } from "react";

export default function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const post = posts.find((p) => p.id === id);

  if (!post) return notFound();

  return (
    <main className="container mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-muted-foreground">{post.content}</p>
    </main>
  );
}
