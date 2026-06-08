import { Star, Plus, Check, Info } from "lucide-react";
import type { Movie } from "./movie-data";

interface MovieCardProps {
  movie: Movie;
  matchScore?: number;
  onSelect: (movie: Movie) => void;
  onDetail: (movie: Movie) => void;
  isInList: boolean;
  onToggleList: (movie: Movie) => void;
  size?: "sm" | "md" | "lg";
}

export function MovieCard({
  movie,
  matchScore,
  onSelect,
  onDetail,
  isInList,
  onToggleList,
  size = "md",
}: MovieCardProps) {
  const heights: Record<string, string> = {
    sm: "h-52",
    md: "h-64",
    lg: "h-80",
  };

  return (
    <div
      className={`group relative rounded-lg overflow-hidden cursor-pointer flex-shrink-0 transition-all duration-300 hover:scale-105 hover:z-10 hover:shadow-2xl`}
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
      onClick={() => onSelect(movie)}
    >
      <div className={`relative ${heights[size]} bg-secondary`}>
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Match score badge */}
        {matchScore !== undefined && (
          <div
            className="absolute top-2 left-2 px-2 py-0.5 rounded text-xs font-medium"
            style={{
              background: matchScore >= 75 ? "#f59e0b" : matchScore >= 50 ? "#06b6d4" : "#6b7280",
              color: "#08090e",
              fontFamily: "'DM Mono', monospace",
            }}
          >
            {matchScore}% match
          </div>
        )}

        {/* Rating */}
        <div
          className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded"
          style={{ background: "rgba(8,9,14,0.85)" }}
        >
          <Star className="w-3 h-3 fill-current" style={{ color: "#f59e0b" }} />
          <span
            className="text-xs"
            style={{ color: "#f0f0f5", fontFamily: "'DM Mono', monospace" }}
          >
            {movie.rating.toFixed(1)}
          </span>
        </div>

        {/* Hover actions */}
        <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between">
          <button
            onClick={e => { e.stopPropagation(); onToggleList(movie); }}
            className="flex items-center justify-center w-8 h-8 rounded-full transition-colors"
            style={{
              background: isInList ? "#f59e0b" : "rgba(255,255,255,0.15)",
              color: isInList ? "#08090e" : "#f0f0f5",
              backdropFilter: "blur(4px)",
            }}
            title={isInList ? "Remover da lista" : "Adicionar à lista"}
          >
            {isInList ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </button>

          <button
            onClick={e => { e.stopPropagation(); onDetail(movie); }}
            className="flex items-center justify-center w-8 h-8 rounded-full transition-colors"
            style={{
              background: "rgba(255,255,255,0.15)",
              color: "#f0f0f5",
              backdropFilter: "blur(4px)",
            }}
            title="Ver detalhes"
          >
            <Info className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Info below poster */}
      <div className="p-2" style={{ background: "#111218" }}>
        <p
          className="truncate text-sm leading-tight"
          style={{ color: "#f0f0f5", fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
        >
          {movie.title}
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          <span
            className="text-xs"
            style={{ color: "#7c7d8a", fontFamily: "'DM Mono', monospace" }}
          >
            {movie.year}
          </span>
          <span className="text-xs" style={{ color: "#3a3b4a" }}>·</span>
          <span className="text-xs truncate" style={{ color: "#7c7d8a" }}>
            {movie.genres[0]}
          </span>
        </div>
      </div>
    </div>
  );
}
