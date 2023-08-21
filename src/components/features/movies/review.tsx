"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import dayjs from "dayjs";

import { API_KEY, ULR_IMAGE } from "@/constants";
import { useGetMovieReviews } from "./movie-queries";
import { CardReview } from "./card-review";

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
    <div>
      <p className="mb-3 text-2xl font-bold text-slate-100">Reviews</p>

      <div className="flex flex-col gap-5">
        {getMovieReviews.data?.results.map((item, index) => (
          <CardReview
            isMobile={false}
            key={item.id}
            index={index}
            name={item.author_details.name || "Anonymous"}
            date={item.updated_at ? dayjs(item.updated_at).format("MMMM DD, YYYY") : ""}
            content={item.content}
            ratings={item.author_details.rating}
            urlImage={
              item.author_details.avatar_path ? ULR_IMAGE + item.author_details.avatar_path : null
            }
            loadMore={loadMore[index]}
            onLoadMore={onLoadMore}
          />
        ))}
      </div>
    </div>
  );
}
