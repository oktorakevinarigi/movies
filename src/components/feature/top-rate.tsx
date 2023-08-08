"use client";
import Image from "next/image";
import Link from "next/link";

import { ULR_IMAGE, API_KEY } from "@/constants";
import { getGenre } from "@/utils";
import { useGetMovieTopRate, useGetMovieGenres } from "./movie-queries";

export function TopRate() {
  const query = { api_key: API_KEY, language: "en-US", page: "1", region: "" };
  const getMovieTopRate = useGetMovieTopRate(query);
  const getMovieGenres = useGetMovieGenres({ api_key: API_KEY, language: "en" });

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <p className="text-white text-sm">Movies</p>
        <p className="text-[#707070] text-sm">Tv Show</p>
      </div>

      <div className="flex gap-4 overflow-x-auto w-full py-1">
        {getMovieTopRate.data?.results.slice(0, 10).map(movie => (
          <Link
            key={movie.id}
            href={`/${movie.id}`}
            className="w-[168px] min-w-[168px] min-h-[102px] rounded-xl bg-[#343434] p-3 flex flex-col gap-1"
          >
            <div className="w-[39px] h-[28px] relative rounded-md overflow-hidden">
              <Image
                src={movie.poster_path ? ULR_IMAGE + movie.poster_path : "/images/no-images.jpg"}
                alt={movie.title}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <p className="text-white text-sm font-semibold line-clamp-2">{movie.title}</p>
            <p className="text-[#656565] text-xs font-light line-clamp-2">
              {getGenre(movie.genre_ids, getMovieGenres.data?.genres || [])}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
