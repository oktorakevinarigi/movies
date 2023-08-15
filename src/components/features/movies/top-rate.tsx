"use client";
import { ULR_IMAGE, API_KEY } from "@/constants";
import { getGenre } from "@/utils";
import { CardTopRate } from "./card-top-rate";
import { useGetMovieTopRate, useGetMovieGenres } from "./movie-queries";

export function TopRate() {
  const query = { api_key: API_KEY, language: "en-US", page: "1", region: "" };
  const getMovieTopRate = useGetMovieTopRate(query);
  const getMovieGenres = useGetMovieGenres({ api_key: API_KEY, language: "en" });

  return (
    <div>
      <p className="mb-4 text-sm font-semibold text-white">Movies Top Rate</p>

      <div className="w-full overflow-x-auto py-1">
        <div className="flex animate-carousel gap-4">
          {getMovieTopRate.data?.results
            .slice(0, 10)
            .map(movie => (
              <CardTopRate
                genres={getGenre(movie.genre_ids, getMovieGenres.data?.genres || [])}
                id={movie.id.toString()}
                title={movie.title}
                urlImage={ULR_IMAGE + movie.poster_path}
                key={movie.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
