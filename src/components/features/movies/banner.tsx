"use client";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import dayjs from "dayjs";

import { getGenre } from "@/utils";
import { ULR_IMAGE, API_KEY } from "@/constants";
import { YoutubeSection } from "@/components/general";
import { Carousel } from "../../user-interfaces";
import { useGetMoviePopular, useGetMovieGenres, useGetMovieVideos } from "./movie-queries";
import { CardBanner } from "./card-banner";
const Modal = dynamic(() => import("@/components/user-interfaces").then(m => m.Modal), {
  ssr: false,
});

export function BannerMovie() {
  const [modal, setModal] = useState({ visible: false, movieId: "" });
  const router = useRouter();
  const query = { api_key: API_KEY, language: "en-US", page: "1", region: "" };
  const getMoviePopular = useGetMoviePopular(query);
  const getMovieGenres = useGetMovieGenres({ api_key: API_KEY, language: "en" });
  const getMovieVideos = useGetMovieVideos(
    { api_key: API_KEY, movie_id: modal.movieId },
    { enabled: modal.visible },
  );

  function onWatch(movieId: string) {
    setModal({ visible: true, movieId });
  }

  function onClose() {
    setModal({ visible: false, movieId: "" });
  }

  function onDetail(id: string) {
    router.push(`/${id}`);
  }

  return (
    <>
      <Carousel
        slides={getMoviePopular.data?.results.slice(0, 6) || []}
        options={{ loop: true }}
        renderSlide={({ slide }) => (
          <div className="sm:ml-10">
            <CardBanner
              date={slide.release_date ? dayjs(slide.release_date).format("YYYY") : ""}
              genres={getGenre(slide.genre_ids, getMovieGenres.data?.genres || [])}
              id={slide.id.toString()}
              overview={slide.overview}
              title={slide.title}
              urlImage={ULR_IMAGE + slide.poster_path}
              onDetail={onDetail}
              onWatch={onWatch}
            />
          </div>
        )}
      />

      {modal.visible && getMovieVideos.data && (
        <Modal onClose={onClose} isOpen={modal.visible}>
          <YoutubeSection
            id={getMovieVideos.data.results.find(movie => movie.type === "Trailer")?.key || ""}
          />
        </Modal>
      )}
    </>
  );
}
