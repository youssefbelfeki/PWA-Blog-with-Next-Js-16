import { NewsSkeleton } from "@/components/news-skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto p-6 space-y-4">
      <NewsSkeleton />
      <NewsSkeleton />
      <NewsSkeleton />
    </div>
  );
}
