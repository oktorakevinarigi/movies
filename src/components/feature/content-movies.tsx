"use client";
import { useSearchParams } from "next/navigation";
import dayjs from "dayjs";

import { getGenre } from "@/utils";
import { Spinner } from "@/components/layouts";
import { ULR_IMAGE, API_KEY } from "@/constants";
import { useGetInfiniteMovieDiscover, useGetMovieGenres } from "./movie-queries";
import { Card } from "./card";

export function ContentMovies() {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const sort = searchParams.get("sort");

  const getMovieGenres = useGetMovieGenres({ api_key: API_KEY, language: "en" });
  const getMovieDiscover = useGetInfiniteMovieDiscover(
    {
      api_key: API_KEY,
      language: "",
      page: "1",
      sort_by: sort || "",
      with_genres: genre || "",
    },
    { keepPreviousData: true, staleTime: Infinity },
  );

  function onLoadMore() {
    getMovieDiscover.fetchNextPage();
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-wrap justify-center gap-5 sm:justify-start">
        {getMovieDiscover.data?.pages
          .map(page => page.results ?? [])
          .flat()
          .map(item => (
            <div key={item.id}>
              <Card
                id={item.id}
                urlImage={item.poster_path ? ULR_IMAGE + item.poster_path : ""}
                genre={getGenre(item.genre_ids, getMovieGenres.data?.genres || [])}
                ratings={item.vote_average}
                title={item.title}
                year={item.release_date ? dayjs(item.release_date).format("YYYY") : ""}
              />
            </div>
          ))}
      </div>

      {getMovieDiscover.isFetching ? <Spinner /> : null}
      {getMovieDiscover.hasNextPage ? (
        <button
          className="text-primary m-auto mt-5 w-[151px] rounded-full bg-[#F00] py-2 text-sm font-semibold"
          onClick={onLoadMore}
        >
          Load More
        </button>
      ) : null}
    </div>
  );
}
