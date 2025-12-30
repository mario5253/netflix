import { useEffect, useState } from "react";
import axios from "../../axios";
import { Movie } from "../../type.ts";



export const useProps = (fetchUrl: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  // APIの取得はuseEffectを使う
  useEffect(() => {
    async function fetchDate() {
      const request = await axios.get(fetchUrl);

      // データの整形
      const movies = request.data.results.map((movie: Movie) => ({
        id: movie.id,
        name: movie.name,
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path,
      }));
      setMovies(movies);
      return request;
    }
    fetchDate();
  }, [fetchUrl]);
  return movies;
};