"use client";
import { useState } from "react";
import dayjs from "dayjs";

import { getGenre, cn } from "@/utils";
import { Spinner } from "@/components/layouts";
import { ULR_IMAGE, API_KEY } from "@/constants";
import { Card } from "./movies/card";
import { useGetMoviePopular, useGetMovieGenres, useGetMovieUpcoming } from "./movie-queries";

type IGetCard = {
  id: number;
  poster_path: string | null;
  title: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
};

function getCard(item: IGetCard, genres: { id: number; name: string }[]) {
  return (
    <div key={item.id}>
      <Card
        id={item.id}
        urlImage={item.poster_path ? ULR_IMAGE + item.poster_path : ""}
        title={item.title}
        year={item.release_date ? dayjs(item.release_date).format("YYYY") : ""}
        ratings={item.vote_average}
        genre={getGenre(item.genre_ids, genres || [])}
      />
    </div>
  );
}

export function DiscoverMovies() {
  const [state, setState] = useState<"popular" | "upcoming">("popular");
  const query = { api_key: API_KEY, language: "en-US", page: "1", region: "" };
  const getMovieGenres = useGetMovieGenres({ api_key: API_KEY, language: "en" });
  const getMoviePopular = useGetMoviePopular(query);
  const getMovieUpcoming = useGetMovieUpcoming(query, {
    enabled: state === "upcoming",
  });

  function onChange(data: "popular" | "upcoming") {
    setState(data);
  }

  return (
    <>
      <div className="mb-3 h-[6px] w-28 bg-[#E74C3C]" />
      <div className="mb-11 flex justify-between">
        <p className="text-primary text-sm font-semibold sm:text-2xl">Discover Movies</p>
        <div className="text-primary flex gap-1 text-xs sm:gap-5 sm:text-sm">
          <div
            className={cn(
              "m-auto cursor-pointer rounded-full px-4 py-[6px]",
              state === "popular" ? "bg-[#FF0000]" : "bg-black/20",
            )}
            onClick={() => onChange("popular")}
          >
            Popularity
          </div>
          <div
            className={cn(
              "text-primary cursor-pointer rounded-full px-4 py-[6px] text-center",
              state === "upcoming" ? "bg-[#FF0000]" : "bg-black/20",
            )}
            onClick={() => onChange("upcoming")}
          >
            Release Date
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-[25px] sm:justify-start">
        {getMoviePopular.isLoading || (getMovieUpcoming.isLoading && state === "upcoming") ? (
          <div className="mb-9 flex w-full justify-center">
            <Spinner />
          </div>
        ) : state === "popular" ? (
          getMoviePopular.data?.results
            .slice(0, 10)
            .map(item => getCard(item, getMovieGenres.data?.genres || []))
        ) : (
          getMovieUpcoming.data?.results
            .slice(0, 10)
            .map(item => getCard(item, getMovieGenres.data?.genres || []))
        )}
      </div>
    </>
  );
}
