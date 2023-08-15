"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { API_KEY } from "@/constants";
import { useGetMoviePopular, useGetMovieGenres, useGetMovieVideos } from "./movie-queries";
import { BannerMovieDesktop } from "./banner-desktop";
import { BannerMovieMobile } from "./banner-mobile";

type BannerMovieProps = {
  isMobile: boolean;
};

export function BannerMovie(props: BannerMovieProps) {
  const { isMobile } = props;
  const [modal, setModal] = useState({ visible: false, movieId: "" });
  const router = useRouter();
  const query = { api_key: API_KEY, language: "en-US", page: "1", region: "" };
  const getMoviePopular = useGetMoviePopular(query);
  const getMovieGenres = useGetMovieGenres({ api_key: API_KEY, language: "en" });
  const getMovieVideos = useGetMovieVideos(
    { api_key: API_KEY, movie_id: modal.movieId },
    { enabled: modal.visible },
  );

  function onWatch(movieId: string) {
    setModal({ visible: true, movieId });
  }

  function onClose() {
    setModal({ visible: false, movieId: "" });
  }

  function onDetail(id: string) {
    router.push(`/${id}`);
  }

  const newProps = {
    moviePopular: getMoviePopular.data?.results.slice(0, 6) || [],
    movieGenres: getMovieGenres.data?.genres || [],
    movieVideos: getMovieVideos.data?.results || [],
    onWatch,
    onClose,
    onDetail,
    visible: modal.visible,
  };

  if (isMobile) {
    return <BannerMovieMobile {...newProps} />;
  }
  return <BannerMovieDesktop {...newProps} />;
}
