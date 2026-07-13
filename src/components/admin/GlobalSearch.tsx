"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { globalSearch } from "@/lib/actions/search";
import type { AITool } from "@/lib/types/tool";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Search, Loader2 } from "lucide-react";

export function GlobalSearch({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<AITool[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Debounced search
  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const delayDebounceFn = setTimeout(async () => {
      try {
        const data = await globalSearch(query);
        setResults(data);
      } catch (error) {
        console.error("Search failed:", error);
      } finally {
        setIsSearching(false);
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleSelect = useCallback((tool: AITool) => {
    onOpenChange(false);
    router.push(`/admin/cms/tools/${tool.slug}`);
  }, [router, onOpenChange]);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput 
        placeholder="Type a command or search tools..." 
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        <CommandEmpty>
          {isSearching ? (
            <div className="flex items-center justify-center p-4">
              <Loader2 className="h-4 w-4 animate-spin text-muted-foreground mr-2" />
              <span>Searching...</span>
            </div>
          ) : (
            query.length < 2 ? "Type to start searching..." : "No results found."
          )}
        </CommandEmpty>
        
        {results.length > 0 && (
          <CommandGroup heading="AI Tools">
            {results.map((tool) => (
              <CommandItem 
                key={tool.id} 
                value={tool.name} 
                onSelect={() => handleSelect(tool)}
              >
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <span>{tool.name}</span>
                  <span className="text-xs text-muted-foreground ml-2">
                    {tool.tagline?.substring(0, 40) || tool.category}
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
}
