"use client";
import { useState } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import dynamic from "next/dynamic";

import { MovieIcon } from "@/components/user-interfaces/icons";
import { ULR_IMAGE, API_KEY } from "@/constants";
import { YoutubeSection } from "@/components/general";
import { SimpleBlock } from "../../layouts/simple-block";
import { useGetMovieDetail, useGetMovieVideos } from "./movie-queries";
const Modal = dynamic(() => import("@/components/user-interfaces").then(m => m.Modal), {
  ssr: false,
});

dayjs.extend(duration);

type BannerDetailProps = {
  isMobile: boolean;
  id: string;
};

export function BannerDetail(props: BannerDetailProps) {
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

  return (
    <>
      <div className="relative h-screen">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full bg-gradient-to-t from-[#080B1A] to-transparent" />
        <Image
          src={
            getMovieDetail.data?.backdrop_path
              ? "https://image.tmdb.org/t/p/original/" + getMovieDetail.data?.backdrop_path
              : "/images/no-images.jpg"
          }
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          alt={getMovieDetail.data?.title || ""}
          priority
        />
      </div>
      <SimpleBlock className="relative z-10 -mt-48 flex gap-10">
        <div>
          <Image
            src={
              getMovieDetail.data?.poster_path
                ? ULR_IMAGE + getMovieDetail.data?.poster_path
                : "/images/no-images.jpg"
            }
            width={220}
            height={330}
            alt={getMovieDetail.data?.title || ""}
            className="mb-3 rounded-xl"
            priority
          />
          <button
            className="flex h-10 w-full items-center justify-center gap-1 rounded-full bg-slate-700/50 text-slate-100"
            onClick={onWatch}
          >
            <MovieIcon width="20px" height="20px" /> Tailer
          </button>
        </div>
        <div className="mt-10 flex-1 space-y-3">
          <p className="text-3xl font-semibold text-white">{getMovieDetail.data?.title}</p>
          <div className="flex items-center gap-2 text-sm text-white">
            {getMovieDetail.data?.release_date ? (
              <p>{dayjs(getMovieDetail.data?.release_date).format("YYYY")}</p>
            ) : null}
            {getMovieDetail.data?.runtime ? (
              <p>● {dayjs.duration(getMovieDetail.data?.runtime, "minutes").hours()} hours +</p>
            ) : null}
          </div>

          <div className="flex gap-2">
            {getMovieDetail.data?.genres.map(item => (
              <p
                key={item.id}
                className="rounded bg-slate-700/50 px-3 py-1 text-xs font-medium text-slate-100"
              >
                {item.name}
              </p>
            ))}
          </div>
          <p className="w-3/5 text-sm leading-loose text-slate-100">
            {getMovieDetail.data?.overview}
          </p>
        </div>
      </SimpleBlock>

      {modal.visible && getMovieVideos.data?.results.length && (
        <Modal onClose={onClose} isOpen={modal.visible}>
          <YoutubeSection
            id={getMovieVideos.data?.results.find(movie => movie.type === "Trailer")?.key || ""}
          />
        </Modal>
      )}
    </>
  );
}
