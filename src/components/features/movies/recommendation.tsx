"use client";
import { API_KEY } from "@/constants";
import { useGetMovieRecommendations, useGetMovieGenres } from "./movie-queries";
import { RecommendationDesktop } from "./recommendation-desktop";
import { RecommendationMobile } from "./recommendation-mobile";

type RecommendationProps = {
  isMobile: boolean;
  id: string;
};

export function Recommendation(props: RecommendationProps) {
  const { isMobile, id } = props;
  const getMovieGenres = useGetMovieGenres({ api_key: API_KEY, language: "en" });
  const getMovieRecommendations = useGetMovieRecommendations({ api_key: API_KEY, movie_id: id });

  if (!getMovieRecommendations.data?.results.length) {
    return null;
  }

  const newProps = {
    movieGenres: getMovieGenres.data?.genres || [],
    movieRecommendations: getMovieRecommendations.data?.results || [],
  };

  if (isMobile) {
    return <RecommendationMobile {...newProps} />;
  }
  return <RecommendationDesktop {...newProps} />;
}
