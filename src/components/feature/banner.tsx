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
            className="w-[704px] h-[281px] bg-black rounded-[20px] flex overflow-hidden ml-10"
          >
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <p className="text-white font-bold text-4xl mb-2 line-clamp-2">{slide.title}</p>
                <div className="flex gap-1 font-normal items-center mb-2">
                  <p className="text-xs text-white">
                    {slide.release_date ? dayjs(slide.release_date).format("YYYY") : null}
                  </p>
                  <div className="h-[6px] w-[6px] rounded-full bg-white bg-opacity-50" />
                  <p className="text-xs text-white line-clamp-2">
                    {getGenre(slide.genre_ids, getMovieGenres.data?.genres || [])}
                  </p>
                </div>
                <p className="text-xs text-[#6A6A6A] font-light mb-4 line-clamp-4">
                  {slide.overview}
                </p>
              </div>
              <button className="bg-[#F00F00] rounded-[10px] w-[97px] h-9 text-white text-xl font-semibold shadow-[1px_1px_14px_0px_#F00]">
                Watch
              </button>
            </div>
            <div className="flex-[1.5] relative before:absolute before:bg-gradient-to-r before:from-black before:from-[5%] before:to-[95%] before:to-transparent before:z-10 before:inset-0">
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
