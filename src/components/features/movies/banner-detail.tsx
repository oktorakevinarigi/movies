"use client";
import { useState } from "react";

import { API_KEY } from "@/constants";
import { useGetMovieDetail, useGetMovieVideos } from "./movie-queries";
import { BannerDetailDesktop } from "./banner-detail-desktop";
import { BannerDetailMobile } from "./banner-detail-mobile";

type BannerDetailProps = {
  isMobile: boolean;
  id: string;
};

export function BannerDetail(props: BannerDetailProps) {
  const { isMobile } = props;
  const [modal, setModal] = useState({ visible: false });
  const getMovieDetail = useGetMovieDetail({
    api_key: API_KEY,
    movie_id: props.id,
    language: "en-US",
    append_to_response: "",
  });
  const getMovieVideos = useGetMovieVideos(
    { api_key: API_KEY, movie_id: props.id },
    { enabled: modal.visible },
  );

  function onWatch() {
    setModal({ visible: true });
  }

  function onClose() {
    setModal({ visible: false });
  }

  const newProps = {
    modal,
    movieDetail: getMovieDetail.data,
    movieVideos: getMovieVideos.data?.results || [],
    onWatch,
    onClose,
  };

  if (isMobile) {
    return <BannerDetailMobile {...newProps} />;
  }
  return <BannerDetailDesktop {...newProps} />;
}
