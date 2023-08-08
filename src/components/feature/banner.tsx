"use client";
import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";

import { getGenre } from "@/utils";
import { ULR_IMAGE, API_KEY } from "@/constants";
import { Carousel } from "../user-interfaces";
import { useGetMoviePopular, useGetMovieGenres } from "./movie-queries";

export function Banner() {
  const query = { api_key: API_KEY, language: "en-US", page: "1", region: "" };
  const getMoviePopular = useGetMoviePopular(query);
  const getMovieGenres = useGetMovieGenres({ api_key: API_KEY, language: "en" });

  return (
    <div className="my-8 hidden sm:block">
      <Carousel
        slides={getMoviePopular.data?.results.slice(0, 6) || []}
        options={{ loop: true }}
        renderSlide={({ slide }) => (
          <Link
            key={slide.id}
            href="/"
            className="ml-10 flex h-[281px] w-[704px] overflow-hidden rounded-[20px] bg-black"
          >
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <p className="mb-2 line-clamp-2 text-4xl font-bold text-white">{slide.title}</p>
                <div className="mb-2 flex items-center gap-1 font-normal">
                  <p className="text-xs text-white">
                    {slide.release_date ? dayjs(slide.release_date).format("YYYY") : null}
                  </p>
                  <div className="h-[6px] w-[6px] rounded-full bg-white bg-opacity-50" />
                  <p className="line-clamp-2 text-xs text-white">
                    {getGenre(slide.genre_ids, getMovieGenres.data?.genres || [])}
                  </p>
                </div>
                <p className="mb-4 line-clamp-4 text-xs font-light text-[#6A6A6A]">
                  {slide.overview}
                </p>
              </div>
              <button className="h-9 w-[97px] rounded-[10px] bg-[#F00F00] text-xl font-semibold text-white shadow-[1px_1px_14px_0px_#F00]">
                Watch
              </button>
            </div>
            <div className="relative flex-[1.5] before:absolute before:inset-0 before:z-10 before:bg-gradient-to-r before:from-black before:from-[5%] before:to-transparent before:to-[95%]">
              <Image
                src={ULR_IMAGE + slide.poster_path}
                alt={slide.title}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </Link>
        )}
      />
    </div>
  );
}
