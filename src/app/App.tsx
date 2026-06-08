import { useState, useMemo, useRef } from "react";
import { Search, X, Star, ChevronRight, Cpu, Users, Film, Bookmark, BookmarkCheck } from "lucide-react";
import {
  MOVIES,
  ALL_GENRES,
  getContentBasedRecommendations,
  getCollaborativeRecommendations,
  getMatchScore,
  type Movie,
} from "./components/movie-data";
import { MovieCard } from "./components/MovieCard";
import { MovieModal } from "./components/MovieModal";

function HorizontalScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className="flex gap-4 overflow-x-auto pb-3"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {children}
    </div>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-5">
      <h2
        className="leading-tight"
        style={{
          fontFamily: "'Playfair Display', serif",
          color: "#f0f0f5",
          fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
          fontWeight: 600,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1 text-sm" style={{ color: "#7c7d8a" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

function AlgorithmBadge({ type }: { type: "content" | "collab" }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs"
      style={{
        background: type === "content" ? "rgba(6,182,212,0.12)" : "rgba(139,92,246,0.12)",
        color: type === "content" ? "#06b6d4" : "#8b5cf6",
        border: `1px solid ${type === "content" ? "rgba(6,182,212,0.25)" : "rgba(139,92,246,0.25)"}`,
        fontFamily: "'DM Mono', monospace",
      }}
    >
      {type === "content" ? <Cpu className="w-3 h-3" /> : <Users className="w-3 h-3" />}
      {type === "content" ? "Content-Based" : "Collaborative Filtering"}
    </span>
  );
}

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [detailMovie, setDetailMovie] = useState<Movie | null>(null);
  const [myList, setMyList] = useState<Set<number>>(new Set());
  const [heroIndex, setHeroIndex] = useState(0);

  const heroMovies = [MOVIES[0], MOVIES[4], MOVIES[3], MOVIES[7]];
  const heroMovie = heroMovies[heroIndex];

  const filteredMovies = useMemo(() => {
    return MOVIES.filter(m => {
      const matchesGenre = selectedGenre === "Todos" || m.genres.includes(selectedGenre);
      const matchesSearch = !searchQuery || m.title.toLowerCase().includes(searchQuery.toLowerCase()) || m.director.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesGenre && matchesSearch;
    });
  }, [selectedGenre, searchQuery]);

  const contentRecs = useMemo(() =>
    selectedMovie ? getContentBasedRecommendations(selectedMovie, 8) : [],
    [selectedMovie]
  );

  const collabRecs = useMemo(() =>
    selectedMovie ? getCollaborativeRecommendations(selectedMovie, 8) : [],
    [selectedMovie]
  );

  const toggleList = (movie: Movie) => {
    setMyList(prev => {
      const next = new Set(prev);
      next.has(movie.id) ? next.delete(movie.id) : next.add(movie.id);
      return next;
    });
  };

  const handleSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
    setDetailMovie(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDetail = (movie: Movie) => {
    setDetailMovie(movie);
  };

  return (
    <div className="min-h-screen" style={{ background: "#08090e", color: "#f0f0f5", fontFamily: "'DM Sans', sans-serif" }}>

      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4"
        style={{ background: "linear-gradient(to bottom, rgba(8,9,14,0.98) 0%, rgba(8,9,14,0.0) 100%)" }}
      >
        <div className="flex items-center gap-2">
          <Film className="w-6 h-6" style={{ color: "#f59e0b" }} />
          <span
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", color: "#f0f0f5", fontWeight: 700 }}
          >
            CineRec<span style={{ color: "#f59e0b" }}>.</span>
          </span>
          <span
            className="hidden sm:block ml-1 px-2 py-0.5 rounded text-xs"
            style={{ background: "rgba(245,158,11,0.12)", color: "#f59e0b", border: "1px solid rgba(245,158,11,0.2)", fontFamily: "'DM Mono', monospace" }}
          >
            ML Recommender
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all"
            style={{ background: "rgba(28,29,38,0.8)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(8px)" }}
          >
            <Search className="w-4 h-4 flex-shrink-0" style={{ color: "#7c7d8a" }} />
            <input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Buscar filmes..."
              className="bg-transparent outline-none text-sm w-36 sm:w-48"
              style={{ color: "#f0f0f5", fontFamily: "'DM Sans', sans-serif" }}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")}>
                <X className="w-3.5 h-3.5" style={{ color: "#7c7d8a" }} />
              </button>
            )}
          </div>

          {/* My List */}
          <button
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-all"
            style={{
              background: myList.size > 0 ? "rgba(245,158,11,0.12)" : "rgba(28,29,38,0.8)",
              border: myList.size > 0 ? "1px solid rgba(245,158,11,0.25)" : "1px solid rgba(255,255,255,0.06)",
              color: myList.size > 0 ? "#f59e0b" : "#7c7d8a",
            }}
          >
            {myList.size > 0 ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            <span className="hidden sm:block">Minha Lista</span>
            {myList.size > 0 && (
              <span
                className="px-1.5 py-0.5 rounded-full text-xs"
                style={{ background: "#f59e0b", color: "#08090e", fontFamily: "'DM Mono', monospace", fontWeight: 600 }}
              >
                {myList.size}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={heroMovie.backdrop}
          alt={heroMovie.title}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090e] via-[#08090e]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090e] via-transparent to-[#08090e]/30" />

        <div className="relative h-full flex flex-col justify-end pb-16 px-8 sm:px-12 max-w-2xl">
          <div className="flex items-center gap-2 mb-3">
            <span
              className="px-2 py-0.5 rounded text-xs"
              style={{ background: "#f59e0b", color: "#08090e", fontFamily: "'DM Mono', monospace", fontWeight: 600 }}
            >
              EM DESTAQUE
            </span>
            {heroMovie.genres.slice(0, 2).map(g => (
              <span key={g} className="px-2 py-0.5 rounded text-xs" style={{ color: "#7c7d8a", border: "1px solid rgba(255,255,255,0.1)" }}>
                {g}
              </span>
            ))}
          </div>

          <h1
            className="leading-none mb-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              color: "#f0f0f5",
              fontWeight: 700,
            }}
          >
            {heroMovie.title}
          </h1>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-current" style={{ color: "#f59e0b" }} />
              <span style={{ color: "#f59e0b", fontFamily: "'DM Mono', monospace" }}>{heroMovie.rating}</span>
            </div>
            <span style={{ color: "#7c7d8a", fontSize: "0.85rem", fontFamily: "'DM Mono', monospace" }}>{heroMovie.year}</span>
            <span style={{ color: "#7c7d8a", fontSize: "0.85rem", fontFamily: "'DM Mono', monospace" }}>{heroMovie.runtime}min</span>
          </div>

          <p
            className="mb-6 leading-relaxed line-clamp-3"
            style={{ color: "#b0b0bb", maxWidth: "480px", fontSize: "0.9rem" }}
          >
            {heroMovie.overview}
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => handleSelectMovie(heroMovie)}
              className="px-6 py-2.5 rounded-lg font-medium transition-all hover:brightness-110 active:scale-95"
              style={{ background: "#f59e0b", color: "#08090e" }}
            >
              Ver Recomendações
            </button>
            <button
              onClick={() => toggleList(heroMovie)}
              className="px-6 py-2.5 rounded-lg transition-all hover:brightness-110 active:scale-95"
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "#f0f0f5",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(4px)",
              }}
            >
              {myList.has(heroMovie.id) ? "✓ Na lista" : "+ Minha lista"}
            </button>
          </div>
        </div>

        {/* Hero dots */}
        <div className="absolute bottom-6 right-8 flex gap-2">
          {heroMovies.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIndex(i)}
              className="w-2 h-2 rounded-full transition-all"
              style={{ background: i === heroIndex ? "#f59e0b" : "rgba(255,255,255,0.25)", width: i === heroIndex ? "24px" : "8px" }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="px-6 sm:px-10 pb-16 -mt-4 relative z-10">

        {/* Algorithm Selector */}
        {selectedMovie && (
          <div
            className="mb-8 p-4 rounded-xl"
            style={{ background: "linear-gradient(135deg, rgba(17,18,24,0.8) 0%, rgba(28,29,38,0.8) 100%)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs mb-1" style={{ color: "#7c7d8a" }}>Gerando recomendações para</p>
                <p style={{ color: "#f59e0b", fontWeight: 600, fontFamily: "'Playfair Display', serif", fontSize: "1.1rem" }}>
                  {selectedMovie.title}
                </p>
              </div>
              <button
                onClick={() => setSelectedMovie(null)}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-colors"
                style={{ background: "rgba(255,255,255,0.06)", color: "#7c7d8a" }}
              >
                <X className="w-3.5 h-3.5" />
                Limpar
              </button>
            </div>
          </div>
        )}

        {/* Recommendation Sections (when movie is selected) */}
        {selectedMovie ? (
          <>
            {/* Content-Based */}
            <section className="mb-10">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <SectionHeader title="Recomendações por Conteúdo" />
                    <AlgorithmBadge type="content" />
                  </div>
                  <p className="text-sm" style={{ color: "#7c7d8a" }}>
                    Similaridade calculada por gênero, diretor e características do filme
                  </p>
                </div>
              </div>

              <div
                className="p-4 rounded-lg mb-5 flex flex-wrap gap-6"
                style={{ background: "rgba(6,182,212,0.05)", border: "1px solid rgba(6,182,212,0.1)" }}
              >
                <div>
                  <p className="text-xs mb-1" style={{ color: "#7c7d8a" }}>Algoritmo</p>
                  <p className="text-sm" style={{ color: "#06b6d4", fontFamily: "'DM Mono', monospace" }}>Jaccard Similarity</p>
                </div>
                <div>
                  <p className="text-xs mb-1" style={{ color: "#7c7d8a" }}>Features</p>
                  <p className="text-sm" style={{ color: "#06b6d4", fontFamily: "'DM Mono', monospace" }}>Gênero + Diretor</p>
                </div>
                <div>
                  <p className="text-xs mb-1" style={{ color: "#7c7d8a" }}>Filmes analisados</p>
                  <p className="text-sm" style={{ color: "#06b6d4", fontFamily: "'DM Mono', monospace" }}>{MOVIES.length - 1}</p>
                </div>
                <div>
                  <p className="text-xs mb-1" style={{ color: "#7c7d8a" }}>Top recomendações</p>
                  <p className="text-sm" style={{ color: "#06b6d4", fontFamily: "'DM Mono', monospace" }}>{contentRecs.length}</p>
                </div>
              </div>

              <HorizontalScroll>
                {contentRecs.map(rec => (
                  <div key={rec.id} className="w-40 flex-shrink-0">
                    <MovieCard
                      movie={rec}
                      matchScore={getMatchScore(selectedMovie, rec)}
                      onSelect={handleSelectMovie}
                      onDetail={handleDetail}
                      isInList={myList.has(rec.id)}
                      onToggleList={toggleList}
                    />
                  </div>
                ))}
              </HorizontalScroll>
            </section>

            {/* Collaborative Filtering */}
            <section className="mb-10">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <SectionHeader title="Filtragem Colaborativa" />
                    <AlgorithmBadge type="collab" />
                  </div>
                  <p className="text-sm" style={{ color: "#7c7d8a" }}>
                    Baseado em padrões de avaliação de usuários com gostos similares
                  </p>
                </div>
              </div>

              <div
                className="p-4 rounded-lg mb-5 flex flex-wrap gap-6"
                style={{ background: "rgba(139,92,246,0.05)", border: "1px solid rgba(139,92,246,0.1)" }}
              >
                <div>
                  <p className="text-xs mb-1" style={{ color: "#7c7d8a" }}>Algoritmo</p>
                  <p className="text-sm" style={{ color: "#8b5cf6", fontFamily: "'DM Mono', monospace" }}>SVD (Matrix Factorization)</p>
                </div>
                <div>
                  <p className="text-xs mb-1" style={{ color: "#7c7d8a" }}>Dataset</p>
                  <p className="text-sm" style={{ color: "#8b5cf6", fontFamily: "'DM Mono', monospace" }}>MovieLens 100K</p>
                </div>
                <div>
                  <p className="text-xs mb-1" style={{ color: "#7c7d8a" }}>Modelo</p>
                  <p className="text-sm" style={{ color: "#8b5cf6", fontFamily: "'DM Mono', monospace" }}>Scikit-Surprise</p>
                </div>
                <div>
                  <p className="text-xs mb-1" style={{ color: "#7c7d8a" }}>Usuários similares</p>
                  <p className="text-sm" style={{ color: "#8b5cf6", fontFamily: "'DM Mono', monospace" }}>k=20 neighbors</p>
                </div>
              </div>

              <HorizontalScroll>
                {collabRecs.map(rec => (
                  <div key={rec.id} className="w-40 flex-shrink-0">
                    <MovieCard
                      movie={rec}
                      onSelect={handleSelectMovie}
                      onDetail={handleDetail}
                      isInList={myList.has(rec.id)}
                      onToggleList={toggleList}
                    />
                  </div>
                ))}
              </HorizontalScroll>
            </section>

            {/* Divider */}
            <div className="my-10" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
          </>
        ) : null}

        {/* Genre Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8" style={{ scrollbarWidth: "none" }}>
          {ALL_GENRES.filter(g => g === "Todos" || MOVIES.some(m => m.genres.includes(g))).map(genre => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className="flex-shrink-0 px-4 py-2 rounded-full text-sm transition-all"
              style={{
                background: selectedGenre === genre ? "#f59e0b" : "rgba(28,29,38,0.8)",
                color: selectedGenre === genre ? "#08090e" : "#7c7d8a",
                border: selectedGenre === genre ? "1px solid #f59e0b" : "1px solid rgba(255,255,255,0.06)",
                fontWeight: selectedGenre === genre ? 600 : 400,
              }}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Movie Grid */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <SectionHeader
              title={searchQuery ? `Resultados para "${searchQuery}"` : selectedGenre === "Todos" ? "Catálogo Completo" : selectedGenre}
              subtitle={`${filteredMovies.length} filmes encontrados`}
            />
            {!selectedMovie && (
              <div className="flex items-center gap-2 text-sm" style={{ color: "#7c7d8a" }}>
                <ChevronRight className="w-4 h-4" />
                Clique em um filme para ver recomendações
              </div>
            )}
          </div>

          {filteredMovies.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Film className="w-12 h-12 mb-4" style={{ color: "#3a3b4a" }} />
              <p style={{ color: "#7c7d8a" }}>Nenhum filme encontrado</p>
            </div>
          ) : (
            <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))" }}>
              {filteredMovies.map(movie => (
                <div
                  key={movie.id}
                  style={{
                    outline: selectedMovie?.id === movie.id ? "2px solid #f59e0b" : "none",
                    borderRadius: "10px",
                    outlineOffset: "2px",
                  }}
                >
                  <MovieCard
                    movie={movie}
                    onSelect={handleSelectMovie}
                    onDetail={handleDetail}
                    isInList={myList.has(movie.id)}
                    onToggleList={toggleList}
                  />
                </div>
              ))}
            </div>
          )}
        </section>

        {/* About section */}
        <section className="mt-16 py-10" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="max-w-3xl">
            <h2
              className="mb-2"
              style={{ fontFamily: "'Playfair Display', serif", color: "#f0f0f5", fontSize: "1.4rem" }}
            >
              Como funciona o sistema
            </h2>
            <p className="mb-6 text-sm leading-relaxed" style={{ color: "#7c7d8a" }}>
              Este sistema combina duas abordagens de Machine Learning para recomendar filmes personalizados.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div
                className="p-5 rounded-xl"
                style={{ background: "rgba(6,182,212,0.05)", border: "1px solid rgba(6,182,212,0.12)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="w-5 h-5" style={{ color: "#06b6d4" }} />
                  <span style={{ color: "#06b6d4", fontFamily: "'DM Mono', monospace", fontSize: "0.85rem" }}>Content-Based Filtering</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#7c7d8a" }}>
                  Analisa características intrínsecas do filme (gênero, diretor, elenco) usando <strong style={{ color: "#b0b0bb" }}>Jaccard Similarity</strong> para calcular a sobreposição entre features e retornar os filmes mais parecidos.
                </p>
              </div>
              <div
                className="p-5 rounded-xl"
                style={{ background: "rgba(139,92,246,0.05)", border: "1px solid rgba(139,92,246,0.12)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5" style={{ color: "#8b5cf6" }} />
                  <span style={{ color: "#8b5cf6", fontFamily: "'DM Mono', monospace", fontSize: "0.85rem" }}>Collaborative Filtering</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#7c7d8a" }}>
                  Usa o dataset <strong style={{ color: "#b0b0bb" }}>MovieLens 100K</strong> com <strong style={{ color: "#b0b0bb" }}>SVD (Decomposição em Valores Singulares)</strong> via Scikit-Surprise para identificar padrões de comportamento entre usuários similares.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Movie Detail Modal */}
      {detailMovie && (
        <MovieModal
          movie={detailMovie}
          isInList={myList.has(detailMovie.id)}
          onToggleList={toggleList}
          onClose={() => setDetailMovie(null)}
          onSelect={m => { setDetailMovie(m); handleSelectMovie(m); }}
        />
      )}

      {/* Footer */}
      <footer className="px-8 py-6" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Film className="w-4 h-4" style={{ color: "#f59e0b" }} />
            <span style={{ fontFamily: "'Playfair Display', serif", color: "#7c7d8a", fontSize: "0.9rem" }}>
              CineRec<span style={{ color: "#f59e0b" }}>.</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs" style={{ color: "#3a3b4a", fontFamily: "'DM Mono', monospace" }}>
            <span>Content-Based · Collaborative Filtering · Python · Scikit-Surprise</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
