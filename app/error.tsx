"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="container mx-auto p-6 text-center space-y-4">
      <h2 className="text-2xl font-bold">⚠️ Something went wrong</h2>

      <p className="text-muted-foreground">
        {error.message}
      </p>

      <Button onClick={reset}>
        Try again
      </Button>
    </div>
  );
}
