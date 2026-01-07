/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Input } from "@/components/ui/input";

export function NewsFilters({
  search,
  setSearch
}: any) {
  return (
    <div className="flex flex-col md:flex-row gap-3">
      <Input
        placeholder="Search news..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
