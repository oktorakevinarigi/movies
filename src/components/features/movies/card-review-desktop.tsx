import Image from "next/image";

import { cn } from "@/utils";
import { IconStar } from "../../user-interfaces";

type CardReviewDesktopProps = {
  name: string;
  date: string;
  ratings: number | null;
  content: string;
  urlImage: string | null;
  loadMore: number | undefined;
  index: number;
  onLoadMore: (index: number) => void;
};

export function CardReviewDesktop(props: CardReviewDesktopProps) {
  return (
    <div className="flex w-full flex-col space-y-3 border-b border-slate-800/70 pb-5">
      <div className="flex w-full justify-between">
        <div className="flex items-center space-x-3">
          <Image
            src={props.urlImage ? props.urlImage : "/images/no-images.jpg"}
            width={56}
            height={56}
            alt="avatar"
            className="h-12 w-12 rounded-full shadow md:h-14 md:w-14"
          />
          <div>
            <p className="text-base font-semibold text-slate-100">{props.name}</p>
            <p className="text-xs font-normal text-zinc-400">{props.date}</p>
          </div>
        </div>
        {props.ratings ? (
          <div className="flex h-fit items-center space-x-2">
            <IconStar />
            <p className="text-sm text-zinc-400">{props.ratings}</p>
          </div>
        ) : null}
      </div>
      <p
        className={cn(
          "text-sm font-normal leading-loose text-slate-100",
          props.loadMore !== undefined && props.loadMore >= 0 ? "" : "line-clamp-5",
        )}
      >
        {props.content}
      </p>
      <button
        className="w-min cursor-pointer whitespace-nowrap font-medium text-blue-500"
        onClick={() => props.onLoadMore(props.index)}
      >
        {props.loadMore !== undefined && props.loadMore >= 0 ? "Less" : "Load More"}
      </button>
    </div>
  );
}
