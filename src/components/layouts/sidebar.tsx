import Link from "next/link";

import { IconMovie, HomeIcon, MovieIcon } from "@/components/user-interfaces";
import { InterFont } from "@/theme/typography";
import { CategoriesMovie } from "../features/movies";

export function Sidebar() {
  return (
    <div className="min-h-screen w-[229px] bg-[#151515] p-6">
      <Link href="/" className="mb-[52px] flex justify-center">
        <IconMovie width="100px" />
      </Link>

      <div className="mb-[36px] flex flex-col gap-6">
        <p className="text-sm font-light text-[#707070]">New feed</p>
        <Link href="/" className="flex items-center gap-3">
          <HomeIcon width="24px" height="24px" className="text-[#707070]" />
          <p className={`${InterFont.className} text-xs font-medium text-white`}>Home</p>
        </Link>
        <Link href="/movies" className=" flex items-center gap-3">
          <MovieIcon width="24px" height="24px" className="text-[#707070]" />
          <p className={`${InterFont.className} text-xs font-medium text-white`}>Movies</p>
        </Link>
      </div>

      <CategoriesMovie />
    </div>
  );
}

export function SidebarSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="min-h-screen w-[229px] bg-slate-200" />
    </div>
  );
}
