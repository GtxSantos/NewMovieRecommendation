import { X, Star, Clock, Play, Plus, Check, Users, Cpu } from "lucide-react";
import { useState } from "react";
import type { Movie } from "./movie-data";
import { getContentBasedRecommendations, getCollaborativeRecommendations, getMatchScore } from "./movie-data";

interface MovieModalProps {
  movie: Movie;
  isInList: boolean;
  onToggleList: (movie: Movie) => void;
  onClose: () => void;
  onSelect: (movie: Movie) => void;
}

export function MovieModal({ movie, isInList, onToggleList, onClose, onSelect }: MovieModalProps) {
  const [activeTab, setActiveTab] = useState<"content" | "collab">("content");

  const contentRecs = getContentBasedRecommendations(movie, 4);
  const collabRecs = getCollaborativeRecommendations(movie, 4);
  const displayed = activeTab === "content" ? contentRecs : collabRecs;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-xl overflow-hidden"
        style={{ background: "#111218", maxHeight: "90vh", overflowY: "auto" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Backdrop */}
        <div className="relative h-72 w-full overflow-hidden">
          <img
            src={movie.backdrop}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111218] via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111218]/60 to-transparent" />

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full transition-colors"
            style={{ background: "rgba(0,0,0,0.6)", color: "#f0f0f5" }}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Overlay content */}
          <div className="absolute bottom-4 left-6 right-6">
            <h2
              className="leading-tight mb-1"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.5rem, 4vw, 2rem)",
                color: "#f0f0f5",
                fontWeight: 700,
              }}
            >
              {movie.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-current" style={{ color: "#f59e0b" }} />
                <span
                  style={{ color: "#f59e0b", fontFamily: "'DM Mono', monospace", fontSize: "0.9rem" }}
                >
                  {movie.rating.toFixed(1)}
                </span>
                <span style={{ color: "#7c7d8a", fontSize: "0.8rem" }}>
                  ({(movie.votes / 1000).toFixed(0)}k votos)
                </span>
              </div>
              <div className="flex items-center gap-1" style={{ color: "#7c7d8a", fontSize: "0.85rem" }}>
                <Clock className="w-3.5 h-3.5" />
                <span style={{ fontFamily: "'DM Mono', monospace" }}>{movie.runtime}min</span>
              </div>
              <span style={{ color: "#7c7d8a", fontSize: "0.85rem" }}>{movie.year}</span>
              <span
                className="px-2 py-0.5 rounded text-xs"
                style={{ background: "rgba(245,158,11,0.15)", color: "#f59e0b", border: "1px solid rgba(245,158,11,0.3)" }}
              >
                {movie.language}
              </span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 pb-6 pt-2">
          {/* Actions */}
          <div className="flex items-center gap-3 mb-5">
            <button
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all active:scale-95"
              style={{ background: "#f59e0b", color: "#08090e", fontWeight: 600 }}
            >
              <Play className="w-4 h-4 fill-current" />
              Assistir
            </button>
            <button
              onClick={() => onToggleList(movie)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all active:scale-95"
              style={{
                background: isInList ? "rgba(245,158,11,0.15)" : "#1c1d26",
                color: isInList ? "#f59e0b" : "#f0f0f5",
                border: isInList ? "1px solid rgba(245,158,11,0.4)" : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {isInList ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              {isInList ? "Na minha lista" : "Minha lista"}
            </button>
          </div>

          {/* Genres */}
          <div className="flex flex-wrap gap-2 mb-4">
            {movie.genres.map(g => (
              <span
                key={g}
                className="px-3 py-1 rounded-full text-xs"
                style={{ background: "#1c1d26", color: "#7c7d8a", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                {g}
              </span>
            ))}
          </div>

          {/* Overview */}
          <p className="mb-4 leading-relaxed" style={{ color: "#b0b0bb", fontSize: "0.9rem" }}>
            {movie.overview}
          </p>

          {/* Meta */}
          <div className="grid grid-cols-2 gap-3 mb-6 py-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div>
              <p className="text-xs mb-1" style={{ color: "#7c7d8a" }}>Diretor</p>
              <p className="text-sm" style={{ color: "#f0f0f5", fontWeight: 500 }}>{movie.director}</p>
            </div>
            <div>
              <p className="text-xs mb-1" style={{ color: "#7c7d8a" }}>Elenco principal</p>
              <p className="text-sm" style={{ color: "#f0f0f5" }}>{movie.cast.slice(0, 2).join(", ")}</p>
            </div>
          </div>

          {/* Recommendations */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3
                style={{ fontFamily: "'Playfair Display', serif", color: "#f0f0f5", fontSize: "1.1rem" }}
              >
                Recomendações
              </h3>
              <div
                className="flex rounded-lg overflow-hidden ml-auto"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <button
                  onClick={() => setActiveTab("content")}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs transition-colors"
                  style={{
                    background: activeTab === "content" ? "#f59e0b" : "transparent",
                    color: activeTab === "content" ? "#08090e" : "#7c7d8a",
                    fontWeight: activeTab === "content" ? 600 : 400,
                  }}
                >
                  <Cpu className="w-3 h-3" />
                  Conteúdo
                </button>
                <button
                  onClick={() => setActiveTab("collab")}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs transition-colors"
                  style={{
                    background: activeTab === "collab" ? "#f59e0b" : "transparent",
                    color: activeTab === "collab" ? "#08090e" : "#7c7d8a",
                    fontWeight: activeTab === "collab" ? 600 : 400,
                  }}
                >
                  <Users className="w-3 h-3" />
                  Colaborativo
                </button>
              </div>
            </div>

            <p className="text-xs mb-3" style={{ color: "#7c7d8a" }}>
              {activeTab === "content"
                ? "Baseado em gênero, diretor e características do filme"
                : "Usuários com gostos similares também assistiram"}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {displayed.map(rec => {
                const score = getMatchScore(movie, rec);
                return (
                  <div
                    key={rec.id}
                    onClick={() => onSelect(rec)}
                    className="group cursor-pointer rounded-lg overflow-hidden transition-transform hover:scale-105"
                    style={{ background: "#1c1d26" }}
                  >
                    <div className="relative aspect-[2/3] overflow-hidden">
                      <img src={rec.poster} alt={rec.title} className="w-full h-full object-cover" />
                      <div className="absolute top-1.5 left-1.5">
                        <span
                          className="px-1.5 py-0.5 rounded text-xs"
                          style={{
                            background: score >= 70 ? "#f59e0b" : "#1c1d26",
                            color: score >= 70 ? "#08090e" : "#7c7d8a",
                            fontFamily: "'DM Mono', monospace",
                            fontSize: "0.65rem",
                          }}
                        >
                          {score}%
                        </span>
                      </div>
                    </div>
                    <div className="p-2">
                      <p className="text-xs truncate" style={{ color: "#f0f0f5", fontWeight: 500 }}>
                        {rec.title}
                      </p>
                      <p className="text-xs" style={{ color: "#7c7d8a", fontFamily: "'DM Mono', monospace" }}>
                        {rec.year}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
