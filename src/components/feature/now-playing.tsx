"use client";
import dayjs from "dayjs";

import { getGenre } from "@/utils";
import { Spinner } from "@/components/layouts";
import { ULR_IMAGE } from "@/constants";
import { Card } from "./card";
import { useGetMovieNowPlaying, useGetMovieGenres } from "./movie-queries";

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

export function NowPlaying() {
  const query = { language: "en-US", page: "1", region: "" };
  const getMovieGenres = useGetMovieGenres({ language: "en" });
  const getMovieNowPlaying = useGetMovieNowPlaying(query);

  return (
    <>
      <p className="text-white font-semibold text-sm mb-4">Now Playing</p>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(205px,1fr))] gap-10">
        {getMovieNowPlaying.isLoading ? (
          <div className="flex justify-center w-full mb-9">
            <Spinner />
          </div>
        ) : (
          getMovieNowPlaying.data?.results
            .slice(0, 8)
            .map(item => getCard(item, getMovieGenres.data?.genres || []))
        )}
      </div>
    </>
  );
}
