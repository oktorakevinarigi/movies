"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import dayjs from "dayjs";
import Image from "next/image";

import { cn } from "@/utils";
import { API_KEY, ULR_IMAGE } from "@/constants";
import { IconStar } from "../../user-interfaces";
import { useGetMovieReviews } from "./movie-queries";

type ICardReview = {
  name: string;
  date: string;
  ratings: number | null;
  content: string;
  urlImage: string | null;
  loadMore: number;
  index: number;
  onLoadMore: (index: number) => void;
};

function CardReview(item: ICardReview) {
  return (
    <div className="mb-5 flex w-full flex-col space-y-3 border-b border-slate-800/70 pb-5">
      <div className="flex w-full justify-between">
        <div className="flex items-center space-x-3">
          <Image
            src={item.urlImage ? ULR_IMAGE + item.urlImage : "/images/no-images.jpg"}
            width={56}
            height={56}
            alt="avatar"
            className="h-12 w-12 rounded-full shadow md:h-14 md:w-14"
          />
          <div>
            <p className="text-base font-semibold text-slate-100">{item.name}</p>
            <p className="text-xs font-normal text-zinc-400">{item.date}</p>
          </div>
        </div>
        {item.ratings ? (
          <div className="flex space-x-1">
            <IconStar />
            <p className="text-sm text-zinc-400">{item.ratings}</p>
          </div>
        ) : null}
      </div>
      <p
        className={cn(
          "text-sm font-normal leading-loose text-slate-100",
          item.loadMore >= 0 ? "" : "line-clamp-5",
        )}
      >
        {item.content}
      </p>
      <button
        className="w-min cursor-pointer whitespace-nowrap font-medium text-blue-500"
        onClick={() => item.onLoadMore(item.index)}
      >
        {item.loadMore >= 0 ? "Less" : "Load More"}
      </button>
    </div>
  );
}

export function Review() {
  const router = useParams();
  const [loadMore, setLoadMore] = useState<number[]>([]);
  const id = router.id as string;
  const getMovieReviews = useGetMovieReviews({ api_key: API_KEY, movie_id: id });

  function onLoadMore(index: number) {
    setLoadMore(prev => {
      const isItem = prev.filter(item => item === index);
      if (isItem.length) {
        return prev.filter(item => item !== index);
      } else {
        return [...prev, index];
      }
    });
  }

  if (!getMovieReviews.data?.results.length) {
    return null;
  }

  return (
    <>
      <p className="mb-3 text-2xl font-bold text-slate-100">Reviews</p>

      {getMovieReviews.data?.results.map((item, index) => (
        <CardReview
          key={item.id}
          index={index}
          name={item.author_details.name}
          date={item.updated_at ? dayjs(item.updated_at).format("MMMM DD, YYYY") : ""}
          content={item.content}
          ratings={item.author_details.rating}
          urlImage={item.author_details.avatar_path}
          loadMore={loadMore[index]}
          onLoadMore={onLoadMore}
        />
      ))}
    </>
  );
}
