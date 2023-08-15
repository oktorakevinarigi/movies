"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/utils";

import { IconMovie, HomeIcon, MovieIcon } from "@/components/user-interfaces";
import { InterFont } from "@/theme/typography";
import { CategoriesMovie } from "../features/movies";

const white = "text-white";
const gray = "text-[#707070]";

export function Sidebar() {
  const pathName = usePathname();

  return (
    <div className="min-h-screen w-[229px] bg-[#151515] p-6">
      <Link href="/" className="mb-[52px] flex justify-center">
        <IconMovie width="100px" />
      </Link>

      <div className="mb-[36px] flex flex-col gap-6">
        <p className="text-sm font-light text-[#707070]">New feed</p>
        <Link href="/" className="flex items-center gap-3">
          <HomeIcon width="24px" height="24px" className={pathName === "/" ? white : gray} />
          <p
            className={cn(
              "text-xs font-medium",
              InterFont.className,
              pathName === "/" ? `font-semibold ${white}` : gray,
            )}
          >
            Home
          </p>
        </Link>
        <Link href="/movies" className=" flex items-center gap-3">
          <MovieIcon width="24px" height="24px" className={pathName === "/movies" ? white : gray} />
          <p
            className={cn(
              "text-xs font-medium",
              InterFont.className,
              pathName === "/movies" ? `font-semibold ${white}` : gray,
            )}
          >
            Movies
          </p>
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
