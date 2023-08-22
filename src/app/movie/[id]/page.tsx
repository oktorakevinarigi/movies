import { headers } from "next/headers";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/utils/query-client";
import { fetchNode, isMobileDevice } from "@/utils";
import {
  getMovieDetail,
  MovieKeys,
  getMovieRecommedations,
  MovieRecommendationsKeys,
  MovieGenresKeys,
  getMovieGenres,
  MovieReviewsKeys,
  getMovieReviews,
} from "@/components/features";
import { MovieDetailPage } from "@/components/pages";
import { API_KEY } from "@/constants";

export default async function Detail({ params }: { params: { id: string } }) {
  const fetch = fetchNode();
  const queryClient = getQueryClient();
  const userAgent = headers().get("user-agent");
  const isMobile = isMobileDevice(userAgent || "");

  const queryDetail = {
    api_key: API_KEY,
    movie_id: params.id,
    language: "en-US",
    append_to_response: "",
  };
  const queryRecommendations = {
    api_key: API_KEY,
    movie_id: params.id,
  };
  const queryGenre = { api_key: API_KEY, language: "en" };
  const queryReviews = {
    api_key: API_KEY,
    movie_id: params.id,
  };

  await Promise.all([
    queryClient.prefetchQuery(MovieKeys.detail(queryDetail), () =>
      getMovieDetail({ fetch, query: queryDetail }),
    ),
    queryClient.prefetchQuery(MovieRecommendationsKeys.list(queryRecommendations), () =>
      getMovieRecommedations({ fetch, query: queryRecommendations }),
    ),
    queryClient.prefetchQuery(MovieGenresKeys.list(queryGenre), () =>
      getMovieGenres({ query: queryGenre, fetch }),
    ),
    queryClient.prefetchQuery(MovieReviewsKeys.list(queryReviews), () =>
      getMovieReviews({ query: queryReviews, fetch }),
    ),
  ]);

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <MovieDetailPage isMobile={isMobile} id={params.id} />
    </Hydrate>
  );
}
