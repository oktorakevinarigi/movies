"use client";
import { useSearchParams } from "next/navigation";
import dayjs from "dayjs";

import { getGenre } from "@/utils";
import { ULR_IMAGE, API_KEY } from "@/constants";
import { useGetInfiniteMovieDiscover, useGetMovieGenres } from "./movie-queries";
import { Card, CardSkeleton } from "./card";

export function ContentMovies() {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const sort = searchParams.get("sort");

  const getMovieGenres = useGetMovieGenres({ api_key: API_KEY, language: "en" });
  const getMovieDiscover = useGetInfiniteMovieDiscover({
    api_key: API_KEY,
    language: "",
    page: "1",
    sort_by: sort || "",
    with_genres: genre || "",
  });

  function onLoadMore() {
    getMovieDiscover.fetchNextPage();
  }

  if (getMovieDiscover.isLoading || getMovieGenres.isLoading) {
    return <CardSkeleton isMobile={false} />;
  }

  return (
    <div className="flex-1">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(205px,1fr))] gap-5">
        {getMovieDiscover.data?.pages
          .map(page => page.results ?? [])
          .flat()
          .map(item => (
            <div key={item.id}>
              <Card
                isMobile={false}
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
      <div className="mt-5 flex w-full flex-col justify-center gap-5">
        {getMovieDiscover.isFetching ? (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(205px,1fr))] gap-5">
            {Array.from(Array(4).keys()).map(key => (
              <CardSkeleton key={key} isMobile={false} />
            ))}
          </div>
        ) : null}
        {getMovieDiscover.hasNextPage ? (
          <button
            className="m-auto w-[151px] rounded-full bg-[#F00] py-2 text-sm font-semibold text-white"
            onClick={onLoadMore}
          >
            Load More
          </button>
        ) : null}
      </div>
    </div>
  );
}
