"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NewsSkeleton } from "./news-skeleton";
import { Article } from "@/lib/types";
interface InfiniteNewsProps {
  articles: Article[];
}

export function InfiniteNews({ articles }: InfiniteNewsProps) {
  const [visible, setVisible] = useState(5);
  const loader = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible((prev) => prev + 5);
      }
    });

    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {articles.slice(0, visible).map((a, i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle>{a.title}</CardTitle>
          </CardHeader>
          <CardContent>{a.description}</CardContent>
        </Card>
      ))}

      <div ref={loader} className="py-6">
        <NewsSkeleton />
      </div>
    </>
  );
}

