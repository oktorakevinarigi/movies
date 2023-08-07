"use client";
import Link from "next/link";

import { IconMovie, CompassIcon, HeartIcon, BellIcon } from "@/components/user-interfaces";
import { InterFont } from "@/theme/typography";
import { useGetMovieGenres } from "../feature/movie-queries";

export function Sidebar() {
  const getMovieGenres = useGetMovieGenres({ language: "en" });
  return (
    <div className="w-[229px] min-h-screen bg-[#151515] p-6">
      <Link href="/" className="flex justify-center mb-[52px]">
        <IconMovie width="100px" />
      </Link>

      <div className="flex flex-col gap-6 mb-[36px]">
        <p className="text-[#707070] text-sm font-light">New feed</p>
        <Link href="/" className="flex items-center gap-3">
          <CompassIcon width="24px" height="24px" className="text-[#707070]" />
          <p className={`${InterFont.className} font-medium text-white text-xs`}>Browse</p>
        </Link>
        <Link href="/" className=" flex items-center gap-3">
          <HeartIcon width="24px" height="24px" className="text-[#707070]" />
          <p className={`${InterFont.className} font-medium text-white text-xs`}>Watchlist</p>
        </Link>
        <Link href="/" className=" flex items-center gap-3">
          <BellIcon width="24px" height="24px" className="text-[#707070]" />
          <p className={`${InterFont.className} font-medium text-white text-xs`}>Remind</p>
        </Link>
      </div>

      <div>
        <p className="text-[#707070] text-sm font-light mb-8">Categories</p>
        <div className="flex flex-col gap-3">
          {getMovieGenres.data?.genres.map(genre => (
            <Link key={genre.id} href="/">
              <p className="text-sm font-semibold text-[#888888] hover:text-white">{genre.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
