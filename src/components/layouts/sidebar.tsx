"use client";
import Link from "next/link";

import { IconMovie, CompassIcon, HeartIcon, BellIcon } from "@/components/user-interfaces";
import { InterFont } from "@/theme/typography";
import { API_KEY } from "@/constants";
import { useGetMovieGenres } from "../feature/movie-queries";

export function Sidebar() {
  const getMovieGenres = useGetMovieGenres({ api_key: API_KEY, language: "en" });
  return (
    <div className="min-h-screen w-[229px] bg-[#151515] p-6">
      <Link href="/" className="mb-[52px] flex justify-center">
        <IconMovie width="100px" />
      </Link>

      <div className="mb-[36px] flex flex-col gap-6">
        <p className="text-sm font-light text-[#707070]">New feed</p>
        <Link href="/" className="flex items-center gap-3">
          <CompassIcon width="24px" height="24px" className="text-[#707070]" />
          <p className={`${InterFont.className} text-xs font-medium text-white`}>Browse</p>
        </Link>
        <Link href="/" className=" flex items-center gap-3">
          <HeartIcon width="24px" height="24px" className="text-[#707070]" />
          <p className={`${InterFont.className} text-xs font-medium text-white`}>Watchlist</p>
        </Link>
        <Link href="/" className=" flex items-center gap-3">
          <BellIcon width="24px" height="24px" className="text-[#707070]" />
          <p className={`${InterFont.className} text-xs font-medium text-white`}>Remind</p>
        </Link>
      </div>

      <div>
        <p className="mb-8 text-sm font-light text-[#707070]">Categories</p>
        <div className="flex flex-col gap-3">
          {getMovieGenres.data?.genres.slice(0, 6).map(genre => (
            <Link key={genre.id} href="/">
              <p className="text-sm font-semibold text-[#888888] hover:text-white">{genre.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
