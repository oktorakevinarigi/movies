import dayjs from "dayjs";

import { getGenre } from "@/utils";
import { Spinner } from "@/components/general";
import { ULR_IMAGE, API_KEY } from "@/constants";
import { useGetMovieNowPlaying, useGetMovieGenres } from "./movie-queries";
import { Card } from "./card";

export function NowPlayingDesktop() {
  const query = { api_key: API_KEY, language: "en-US", page: "1", region: "" };
  const getMovieGenres = useGetMovieGenres({ api_key: API_KEY, language: "en" });
  const getMovieNowPlaying = useGetMovieNowPlaying(query);

  return (
    <div>
      <p className="mb-4 text-sm font-semibold text-white">Now Playing</p>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(205px,1fr))] gap-10">
        {getMovieNowPlaying.isLoading ? (
          <div className="mb-9 flex w-full justify-center">
            <Spinner />
          </div>
        ) : (
          getMovieNowPlaying.data?.results
            .slice(0, 8)
            .map(item => (
              <Card
                key={item.id}
                isMobile={false}
                id={item.id}
                urlImage={item.poster_path ? ULR_IMAGE + item.poster_path : ""}
                title={item.title}
                year={item.release_date ? dayjs(item.release_date).format("YYYY") : ""}
                ratings={item.vote_average}
                genre={getGenre(item.genre_ids, getMovieGenres.data?.genres || [])}
              />
            ))
        )}
      </div>
    </div>
  );
}
