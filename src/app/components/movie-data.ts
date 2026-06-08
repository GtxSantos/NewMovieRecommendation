export interface Movie {
  id: number;
  title: string;
  year: number;
  genres: string[];
  rating: number;
  votes: number;
  overview: string;
  director: string;
  cast: string[];
  poster: string;
  backdrop: string;
  runtime: number;
  language: string;
}

const TMDB_BASE = "https://image.tmdb.org/t/p/w500";
const TMDB_BACKDROP = "https://image.tmdb.org/t/p/w1280";

export const MOVIES: Movie[] = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genres: ["Sci-Fi", "Thriller", "Action"],
    rating: 8.8,
    votes: 2400000,
    overview: "Um ladrão que rouba segredos corporativos através da tecnologia de compartilhamento de sonhos recebe a tarefa inversa de plantar uma ideia na mente de um CEO.",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"],
    poster: `${TMDB_BASE}/9e3Dz7aCANy5aRUQF745IlNloJ1.jpg`,
    backdrop: `${TMDB_BACKDROP}/9e3Dz7aCANy5aRUQF745IlNloJ1.jpg`,
    runtime: 148,
    language: "EN",
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    genres: ["Action", "Crime", "Drama"],
    rating: 9.0,
    votes: 2800000,
    overview: "Quando o Joker emerge do caos de Gotham para mergulhar a cidade em anarquia, Batman deve aceitar um dos maiores testes psicológicos e físicos de sua capacidade de lutar contra a injustiça.",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
    poster: `${TMDB_BASE}/qJ2tW6WMUDux911r6m7haRef0WH.jpg`,
    backdrop: `${TMDB_BACKDROP}/hqkIcbrOHL86UncnHIsHVcVmzue.jpg`,
    runtime: 152,
    language: "EN",
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    genres: ["Sci-Fi", "Drama", "Adventure"],
    rating: 8.6,
    votes: 1900000,
    overview: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço numa tentativa de garantir a sobrevivência da humanidade.",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    poster: `${TMDB_BASE}/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg`,
    backdrop: `${TMDB_BACKDROP}/pbrkL804c8yAv3zBZR4QPEafpAR.jpg`,
    runtime: 169,
    language: "EN",
  },
  {
    id: 4,
    title: "Parasita",
    year: 2019,
    genres: ["Drama", "Thriller", "Comedy"],
    rating: 8.5,
    votes: 820000,
    overview: "Toda a família Ki-taek está desempregada e vive num porão. Quando o filho consegue um emprego como tutor particular numa família rica, inicia-se uma reviravolta inesperada.",
    director: "Bong Joon-ho",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik"],
    poster: `${TMDB_BASE}/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg`,
    backdrop: `${TMDB_BACKDROP}/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg`,
    runtime: 132,
    language: "KO",
  },
  {
    id: 5,
    title: "Duna",
    year: 2021,
    genres: ["Sci-Fi", "Adventure", "Drama"],
    rating: 8.0,
    votes: 730000,
    overview: "O jovem Paul Atreides, herdeiro de uma família nobre, chega ao planeta mais perigoso do universo para garantir o futuro de sua família e do seu povo.",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Rebecca Ferguson", "Zendaya", "Oscar Isaac"],
    poster: `${TMDB_BASE}/uzERcfV2rSHNhW5eViQiO9hNiA7.jpg`,
    backdrop: `${TMDB_BACKDROP}/uzERcfV2rSHNhW5eViQiO9hNiA7.jpg`,
    runtime: 155,
    language: "EN",
  },
  {
    id: 6,
    title: "Matrix",
    year: 1999,
    genres: ["Sci-Fi", "Action"],
    rating: 8.7,
    votes: 1900000,
    overview: "Um hacker descobre que tudo o que acredita ser real é uma simulação elaborada criada por máquinas, e se junta a uma rebelião para derrubar o sistema.",
    director: "Lana Wachowski",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"],
    poster: `${TMDB_BASE}/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg`,
    backdrop: `${TMDB_BACKDROP}/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg`,
    runtime: 136,
    language: "EN",
  },
  {
    id: 7,
    title: "Coringa",
    year: 2019,
    genres: ["Crime", "Drama", "Thriller"],
    rating: 8.4,
    votes: 1200000,
    overview: "Em Gotham City, o comediante fracassado Arthur Fleck é marginalizado e maltratado pela sociedade. Ele então embarca numa espiral descendente de revolução e crime.",
    director: "Todd Phillips",
    cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz", "Frances Conroy"],
    poster: `${TMDB_BASE}/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg`,
    backdrop: `${TMDB_BACKDROP}/n6bUvigpRFqSwmPp1ZIz5inUAmp.jpg`,
    runtime: 122,
    language: "EN",
  },
  {
    id: 8,
    title: "Blade Runner 2049",
    year: 2017,
    genres: ["Sci-Fi", "Drama", "Mystery"],
    rating: 8.0,
    votes: 580000,
    overview: "Um blade runner da LAPD descobre um segredo há muito enterrado que tem potencial para mergulhar o que resta da sociedade no caos.",
    director: "Denis Villeneuve",
    cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas", "Sylvia Hoeks"],
    poster: `${TMDB_BASE}/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg`,
    backdrop: `${TMDB_BACKDROP}/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg`,
    runtime: 164,
    language: "EN",
  },
  {
    id: 9,
    title: "Mad Max: Estrada da Fúria",
    year: 2015,
    genres: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.1,
    votes: 980000,
    overview: "Em um mundo pós-apocalíptico, Max se alia a Furiosa, uma imperatriz rebelde, numa corrida desesperada pelo deserto para escapar de um senhor da guerra.",
    director: "George Miller",
    cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult", "Hugh Keays-Byrne"],
    poster: `${TMDB_BASE}/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg`,
    backdrop: `${TMDB_BACKDROP}/phszHPFnhCCmYTHVCLcTGvHGxiA.jpg`,
    runtime: 120,
    language: "EN",
  },
  {
    id: 10,
    title: "La La Land",
    year: 2016,
    genres: ["Drama", "Musical", "Romance"],
    rating: 8.0,
    votes: 720000,
    overview: "Um pianista de jazz e uma atriz aspirante se apaixonam enquanto perseguem seus sonhos em Los Angeles.",
    director: "Damien Chazelle",
    cast: ["Ryan Gosling", "Emma Stone", "John Legend", "Rosemarie DeWitt"],
    poster: `${TMDB_BASE}/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg`,
    backdrop: `${TMDB_BACKDROP}/nadTlnTE0DkMpWWLEDNSHl2NKCD.jpg`,
    runtime: 128,
    language: "EN",
  },
  {
    id: 11,
    title: "Whiplash",
    year: 2014,
    genres: ["Drama", "Musical"],
    rating: 8.5,
    votes: 830000,
    overview: "Um jovem baterista ambicioso tenta atingir o sucesso a todo custo, embora um instrutor exigente e abusivo ameace destruir sua saúde e relacionamentos.",
    director: "Damien Chazelle",
    cast: ["Miles Teller", "J.K. Simmons", "Melissa Benoist", "Paul Reiser"],
    poster: `${TMDB_BASE}/7fn624j5lj3xTme2SgiLCeuedmO.jpg`,
    backdrop: `${TMDB_BACKDROP}/6bbZ6XyvgfjhQwbplnUh1LSj1ky.jpg`,
    runtime: 107,
    language: "EN",
  },
  {
    id: 12,
    title: "Hereditário",
    year: 2018,
    genres: ["Horror", "Drama", "Mystery"],
    rating: 7.3,
    votes: 390000,
    overview: "Após a morte da matriarca, a família Graham começa a desvendar segredos sombrios sobre seu legado, sendo arrastada a um destino macabro.",
    director: "Ari Aster",
    cast: ["Toni Collette", "Gabriel Byrne", "Alex Wolff", "Milly Shapiro"],
    poster: `${TMDB_BASE}/wonYMeHauhrxSi5UTOtj5L479mS.jpg`,
    backdrop: `${TMDB_BACKDROP}/mv2MAlYGSBkT1GSSJf50zRLkl4J.jpg`,
    runtime: 127,
    language: "EN",
  },
  {
    id: 13,
    title: "Tenet",
    year: 2020,
    genres: ["Action", "Sci-Fi", "Thriller"],
    rating: 7.4,
    votes: 540000,
    overview: "Um agente secreto aprende a manipular o fluxo do tempo para evitar uma terceira guerra mundial.",
    director: "Christopher Nolan",
    cast: ["John David Washington", "Robert Pattinson", "Elizabeth Debicki", "Kenneth Branagh"],
    poster: `${TMDB_BASE}/Ae0pbv4E6YfqfN3UjKWIfQSzP9v.jpg`,
    backdrop: `${TMDB_BACKDROP}/wzJRB4MKi3yK138bJyuL9nx47y6.jpg`,
    runtime: 150,
    language: "EN",
  },
  {
    id: 14,
    title: "Tudo em Todo Lugar ao Mesmo Tempo",
    year: 2022,
    genres: ["Action", "Sci-Fi", "Comedy"],
    rating: 7.8,
    votes: 490000,
    overview: "Uma lavanderia chinesa, sobrecarregada de impostos, descobre que pode acessar as habilidades de seus eus alternativos em universos paralelos para salvar o multiverso.",
    director: "Daniel Kwan",
    cast: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan", "Jamie Lee Curtis"],
    poster: `${TMDB_BASE}/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg`,
    backdrop: `${TMDB_BACKDROP}/oKtO2jXO7O5TY7AvwBepBJmDVj4.jpg`,
    runtime: 139,
    language: "EN",
  },
  {
    id: 15,
    title: "O Farol",
    year: 2019,
    genres: ["Horror", "Drama", "Mystery"],
    rating: 7.5,
    votes: 280000,
    overview: "Dois faroleiros tentam manter a sanidade enquanto ficam presos em uma ilha remota da Nova Inglaterra no final do século XIX.",
    director: "Robert Eggers",
    cast: ["Robert Pattinson", "Willem Dafoe"],
    poster: `${TMDB_BASE}/zdowK9GrOxK0YddhXuMPyxnTA02.jpg`,
    backdrop: `${TMDB_BACKDROP}/5Ow0TxeNHBe8RJj2RDt0IqbQjpG.jpg`,
    runtime: 109,
    language: "EN",
  },
  {
    id: 16,
    title: "Top Gun: Maverick",
    year: 2022,
    genres: ["Action", "Drama"],
    rating: 8.3,
    votes: 690000,
    overview: "Após mais de 30 anos de serviço como um dos principais aviadores da Marinha, Pete Mitchell está onde sempre pertenceu, empurrando os limites como um piloto de teste corajoso.",
    director: "Joseph Kosinski",
    cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly", "Jon Hamm"],
    poster: `${TMDB_BASE}/62HCnUTziyWcpDaBO2i1DX17ljH.jpg`,
    backdrop: `${TMDB_BACKDROP}/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg`,
    runtime: 130,
    language: "EN",
  },
  {
    id: 17,
    title: "O Batman",
    year: 2022,
    genres: ["Action", "Crime", "Drama"],
    rating: 7.9,
    votes: 580000,
    overview: "Batman se aprofunda na corrupção que permeia Gotham City quando um assassino sádico começa a matar figuras políticas de alto escalão.",
    director: "Matt Reeves",
    cast: ["Robert Pattinson", "Zoë Kravitz", "Paul Dano", "Jeffrey Wright"],
    poster: `${TMDB_BASE}/74xTEgt7R36Fpooo50r9T25onhq.jpg`,
    backdrop: `${TMDB_BACKDROP}/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg`,
    runtime: 176,
    language: "EN",
  },
  {
    id: 18,
    title: "Midsommar",
    year: 2019,
    genres: ["Horror", "Drama", "Mystery"],
    rating: 7.1,
    votes: 320000,
    overview: "Um casal viaja para a Suécia para visitar um festival rural que acontece uma vez a cada 90 anos, mas o que parece ser uma celebração idílica se transforma em algo sinistro.",
    director: "Ari Aster",
    cast: ["Florence Pugh", "Jack Reynor", "Wilhelm Blomgren", "Vilhelm Blomgren"],
    poster: `${TMDB_BASE}/7LEI8ulZzO5gy9Ww2NVCrKmHeDZ.jpg`,
    backdrop: `${TMDB_BACKDROP}/sIqX2XRA1MZHCKmZRWbcSIGGWPG.jpg`,
    runtime: 148,
    language: "EN",
  },
  {
    id: 19,
    title: "O Regresso",
    year: 2015,
    genres: ["Adventure", "Drama", "Thriller"],
    rating: 8.0,
    votes: 790000,
    overview: "Um explorador Hugh Glass é gravemente ferido num ataque de urso e abandonado na natureza selvagem. Determinado a sobreviver, ele parte em busca de vingança.",
    director: "Alejandro G. Iñárritu",
    cast: ["Leonardo DiCaprio", "Tom Hardy", "Will Poulter", "Domhnall Gleeson"],
    poster: `${TMDB_BASE}/x1jViuXsm5ZmrR6uFmxU6AVdXzs.jpg`,
    backdrop: `${TMDB_BACKDROP}/x1jViuXsm5ZmrR6uFmxU6AVdXzs.jpg`,
    runtime: 156,
    language: "EN",
  },
  {
    id: 20,
    title: "Fuja!",
    year: 2017,
    genres: ["Horror", "Thriller", "Mystery"],
    rating: 7.7,
    votes: 650000,
    overview: "Um fotógrafo negro visita a família de sua namorada branca para um fim de semana, onde percebe que algo sinistro acontece com os negros da cidade.",
    director: "Jordan Peele",
    cast: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford", "Catherine Keener"],
    poster: `${TMDB_BASE}/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg`,
    backdrop: `${TMDB_BACKDROP}/mb3D4aGJlrfyLOhJBXpJH7ozrB6.jpg`,
    runtime: 104,
    language: "EN",
  },
  {
  
    id: 21,
    title: "Arranha-Céu: Coragem sem Limite",
    year: 2018,
    genres: ["Action", "Thriller", "Drama"],
    rating: 5.8,
    votes: 410000,
    overview: "O veterano de guerra e ex-líder da equipe de resgate do FBI, Will Ford, atua como avaliador de segurança de arranha-céus. Durante um trabalho na China, ele encontra o edifício mais alto e seguro do mundo repentinamente em chamas e acaba sendo incriminado por isso.",
    director: "Rawson Marshall Thurber",
    cast: ["Dwayne Johnson", "Neve Campbell", "Chin Han", "Roland Møller"],
    poster: `${TMDB_BASE}/fvwR00VUW2yFtSdYr8F3NUmusf6.jpg`,
    backdrop: "https://m.media-amazon.com/images/M/MV5BZTUwOTllZDktMzBkZC00OGUzLTlkZDktYzBhMTlmZmQ1ZmNjXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg",
    runtime: 102,
    language: "EN",

  },
  {
    id: 22,
    title: "Vingadores: Ultimato",
    year: 2019,
    genres: ["Action", "Sci-Fi", "Adventure"],
    rating: 8.4,
    votes: 1200000,
    overview: "Após os eventos devastadores de Infinty War, o universo está em ruínas. Os Vingadores remanescentes se reúnem mais uma vez para desfazer as ações de Thanos.",
    director: "Anthony Russo",
    cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"],
    poster: `${TMDB_BASE}/or06FN3Dka5tukK1e9sl16pB3iy.jpg`,
    backdrop: `${TMDB_BACKDROP}/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg`,
    runtime: 181,
    language: "EN",
  },
  {
    id: 23,
    title: "1917",
    year: 2019,
    genres: ["Drama", "Action", "War"],
    rating: 8.3,
    votes: 650000,
    overview: "Durante a Primeira Guerra Mundial, dois soldados britânicos recebem a aparentemente impossível missão de cruzar território inimigo e entregar uma mensagem que pode salvar 1600 vidas.",
    director: "Sam Mendes",
    cast: ["George MacKay", "Dean-Charles Chapman", "Mark Strong", "Andrew Scott"],
    poster: `${TMDB_BASE}/m6VVgmwNdOWvLo8nlheLPQU5wr7.jpg`,
    backdrop: `${TMDB_BACKDROP}/9VfBQ6EBkRTWhRXnMXKfMn0efDP.jpg`,
    runtime: 119,
    language: "EN",
  },
  {
    id: 24,
    title: "Homem-Aranha: Sem Volta Para Casa",
    year: 2021,
    genres: ["Action", "Sci-Fi", "Adventure"],
    rating: 8.2,
    votes: 890000,
    overview: "Peter Parker pede ao Doutor Estranho que faça o mundo esquecer que ele é o Homem-Aranha, mas um feitiço mal executado abre o multiverso.",
    director: "Jon Watts",
    cast: ["Tom Holland", "Zendaya", "Benedict Cumberbatch", "Jon Favreau"],
    poster: `${TMDB_BASE}/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg`,
    backdrop: `${TMDB_BACKDROP}/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg`,
    runtime: 148,
    language: "EN",
  },
];

export const ALL_GENRES = ["Todos", "Action", "Sci-Fi", "Drama", "Thriller", "Horror", "Comedy", "Adventure", "Crime", "Musical", "Romance", "Mystery", "War"];

// Content-based: genre overlap similarity
function genreSimilarity(a: Movie, b: Movie): number {
  const setA = new Set(a.genres);
  const intersection = b.genres.filter(g => setA.has(g)).length;
  const union = new Set([...a.genres, ...b.genres]).size;
  return intersection / union;
}

// Director bonus
function directorBonus(a: Movie, b: Movie): number {
  return a.director === b.director ? 0.3 : 0;
}

export function getContentBasedRecommendations(movie: Movie, count = 6): Movie[] {
  return MOVIES
    .filter(m => m.id !== movie.id)
    .map(m => ({
      movie: m,
      score: genreSimilarity(movie, m) + directorBonus(movie, m),
    }))
    .sort((a, b) => b.score - a.score || b.movie.rating - a.movie.rating)
    .slice(0, count)
    .map(x => x.movie);
}

// Collaborative: pre-defined user clusters based on taste profiles
const USER_CLUSTERS: Record<number, number[]> = {
  1: [3, 6, 13, 8, 5, 14],   // Inception → sci-fi/mindfuck fans
  2: [7, 17, 23, 20, 4, 19],  // Dark Knight → dark/crime fans
  3: [1, 5, 8, 6, 14, 22],    // Interstellar → epic sci-fi fans
  4: [7, 20, 2, 12, 15, 18],  // Parasita → social thriller fans
  5: [3, 8, 1, 6, 14, 22],    // Duna → sci-fi epic fans
  6: [1, 3, 13, 5, 8, 14],    // Matrix → sci-fi action fans
  7: [2, 4, 20, 12, 17, 23],  // Coringa → dark drama fans
  8: [5, 3, 1, 6, 13, 15],    // Blade Runner → atmospheric sci-fi fans
  9: [16, 22, 24, 2, 13, 23], // Mad Max → action spectacle fans
  10: [11, 4, 7, 19, 23, 16], // La La Land → emotional drama fans
  11: [10, 4, 7, 19, 23, 2],  // Whiplash → intense drama fans
  12: [18, 20, 15, 4, 7, 1],  // Hereditário → horror fans
  13: [1, 6, 3, 8, 5, 2],     // Tenet → Nolan fans
  14: [1, 5, 6, 3, 22, 24],   // EEAAO → multiverse fans
  15: [12, 18, 20, 8, 4, 7],  // O Farol → art horror fans
  16: [9, 22, 24, 2, 23, 17], // Top Gun → action fans
  17: [2, 7, 23, 20, 13, 4],  // Batman → dark DC fans
  18: [12, 15, 20, 4, 7, 8],  // Midsommar → folk horror fans
  19: [3, 10, 23, 11, 4, 2],  // O Regresso → survival drama fans
  20: [12, 18, 15, 4, 7, 2],  // Get Out → social horror fans
  21: [4, 10, 7, 11, 8, 15],  // drama fans
  22: [24, 9, 14, 16, 6, 5],  // Marvel fans
  23: [2, 19, 10, 11, 16, 17],// war/drama fans
  24: [22, 14, 6, 9, 5, 16],  // Marvel fans
};

export function getCollaborativeRecommendations(movie: Movie, count = 6): Movie[] {
  const ids = USER_CLUSTERS[movie.id] || [];
  return ids
    .map(id => MOVIES.find(m => m.id === id))
    .filter(Boolean)
    .slice(0, count) as Movie[];
}

export function getMatchScore(base: Movie, candidate: Movie): number {
  const genreScore = genreSimilarity(base, candidate);
  const dirScore = base.director === candidate.director ? 0.2 : 0;
  const ratingBonus = (candidate.rating - 7) / 10;
  return Math.min(99, Math.round((genreScore + dirScore + ratingBonus) * 100));
}
