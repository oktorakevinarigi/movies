import Image from "next/image";
import Link from "next/link";

import { IconStar } from "../user-interfaces";

type CardProps = {
  id: number;
  urlImage: string;
  title: string;
  year: string;
  ratings: number;
  genre: string;
};

export function Card(props: CardProps) {
  const { id, urlImage, title, year, ratings, genre } = props;

  return (
    <div className="relative">
      <div className="rounded-xl overflow-hidden mb-3 h-[330px] relative group">
        <Image
          src={urlImage || "/images/no-images.jpg"}
          alt={title}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="hidden group-hover:absolute group-hover:top-0 group-hover:left-0 group-hover:right-0 group-hover:h-[330px] group-hover:bg-black group-hover:bg-opacity-80 group-hover:z-20 group-hover:flex group-hover:flex-col group-hover:items-center group-hover:justify-center group-hover:gap-12 rounded-xl">
          <div className="flex gap-1 items-center">
            <IconStar width="18px" height="18px" />
            <p className="text-white text-lg font-bold">{ratings}</p>
          </div>
          <p className="text-white text-center px-2">{genre}</p>
          <Link
            href={`/${id}`}
            className="bg-[#FF0000] px-8 py-2 rounded-full cursor-pointer text-white font-bold text-sm"
          >
            View
          </Link>
        </div>
        <div className="min-w-[40px] h-8 px-2 absolute right-0 top-0 z-10 flex justify-center items-center bg-[#1E232B] bg-opacity-80 rounded-bl-xl gap-1">
          <IconStar width="18px" height="18px" />
          <p className="text-white">{ratings}</p>
        </div>
      </div>

      <p className="text-white font-semibold line-clamp-2">{title}</p>
      <p className="text-[#707070] text-sm">{year}</p>
    </div>
  );
}
