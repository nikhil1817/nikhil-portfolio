"use client";

import { useMemo, useRef, useState } from "react";
import { searchIndex, projectsUsingSkill, SearchEntry } from "@/data/searchIndex";
import { slugify } from "@/lib/slug";

function jumpTo(domId: string) {
  const el = document.getElementById(domId);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "center" });
  el.classList.remove("search-highlight");
  // force reflow so the animation can restart if the same item is clicked twice
  void el.offsetWidth;
  el.classList.add("search-highlight");
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = useMemo<SearchEntry[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return searchIndex
      .filter((entry) => entry.label.toLowerCase().includes(q))
      .slice(0, 8);
  }, [query]);

  function handleSelect(entry: SearchEntry) {
    setOpen(false);
    setQuery("");

    if (entry.type === "skill") {
      const relatedProjects = projectsUsingSkill(entry.label);
      // Jump to the skill chip first; if it's used in projects, also reveal them.
      jumpTo(entry.domId);
      if (relatedProjects.length > 0) {
        window.setTimeout(() => {
          const firstProjectId = `project-${slugify(relatedProjects[0].title)}`;
          window.location.hash = "projects";
          jumpTo(firstProjectId);
        }, 900);
      }
    } else {
      jumpTo(entry.domId);
    }
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 focus-within:border-[#C9914F]/60 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 shrink-0 text-white/40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.65 4.65a7.5 7.5 0 0011.998 11.998z"
          />
        </svg>
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => window.setTimeout(() => setOpen(false), 150)}
          placeholder="Search a skill or project — e.g. Docker, RAG, Next.js"
          className="w-full bg-transparent font-mono text-sm text-white placeholder:text-white/35 outline-none"
        />
      </div>

      {open && query.trim() && (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-white/10 bg-[#0F1420] shadow-xl">
          {results.length === 0 ? (
            <p className="px-4 py-3 text-sm text-white/40">
              No match for &quot;{query}&quot; — try a different skill or project name.
            </p>
          ) : (
            <ul className="max-h-72 overflow-y-auto">
              {results.map((entry) => (
                <li key={`${entry.type}-${entry.domId}`}>
                  <button
                    onMouseDown={() => handleSelect(entry)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left hover:bg-white/5 transition"
                  >
                    <span>
                      <span className="text-sm text-white">{entry.label}</span>
                      {entry.category && (
                        <span className="ml-2 text-xs text-white/35">
                          {entry.category}
                        </span>
                      )}
                    </span>
                    <span className="shrink-0 rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-white/40">
                      {entry.type}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
