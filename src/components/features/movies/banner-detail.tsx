"use client";
import Image from "next/image";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

import { ULR_IMAGE, API_KEY } from "@/constants";
import { SimpleBlock } from "../../layouts/simple-block";
import { useGetMovieDetail } from "./movie-queries";

dayjs.extend(duration);

export function BannerDetail() {
  const getMovieDetail = useGetMovieDetail({
    api_key: API_KEY,
    movie_id: "569094",
    language: "en-US",
    append_to_response: "",
  });

  return (
    <>
      <div className="relative h-screen">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full bg-gradient-to-t from-[#1e1e1e] to-transparent" />
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
        <Image
          src={
            getMovieDetail.data?.poster_path
              ? ULR_IMAGE + getMovieDetail.data?.poster_path
              : "/images/no-images.jpg"
          }
          width={220}
          height={330}
          alt={getMovieDetail.data?.title || ""}
          className="rounded-xl"
          priority
        />
        <div className="mt-10 space-y-3">
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
    </>
  );
}
