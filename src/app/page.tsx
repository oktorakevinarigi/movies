import { dehydrate, Hydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/utils/query-client";
import { fetchNode } from "@/utils";
import { HomePage } from "@/components/pages";
import {
  getMoviePopular,
  MoviePopularKeys,
  getMovieGenres,
  MovieGenresKeys,
  getMovieNowPlaying,
  MovieNowPlayingKeys,
  getMovieTopRate,
  MovieTopRateKeys,
} from "@/components/feature";

export default async function Home() {
  const fetch = fetchNode({
    token:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDU3MDFlNGFhZDliNzRiMmY2Zjk0MTk2OWQxNTYzZCIsInN1YiI6IjY0YTIzYmY2ZDQwMGYzMDBlYmZlNjIxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.onf64C683ZIDbi4R8EW1PafgzW8_pBFUePoDJ5uaa6c",
  });
  const queryClient = getQueryClient();

  const queryGenre = { language: "en" };
  const query = { language: "en-US", page: "1", region: "" };

  await Promise.all([
    queryClient.prefetchQuery(MoviePopularKeys.list(query), () =>
      getMoviePopular({ query: query, fetch }),
    ),
    queryClient.prefetchQuery(MovieNowPlayingKeys.list(query), () =>
      getMovieNowPlaying({ query: query, fetch }),
    ),
    queryClient.prefetchQuery(MovieTopRateKeys.list(query), () =>
      getMovieTopRate({ query: query, fetch }),
    ),
    queryClient.prefetchQuery(MovieGenresKeys.list(queryGenre), () =>
      getMovieGenres({ query: queryGenre, fetch }),
    ),
  ]);

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <HomePage />
    </Hydrate>
  );
}
