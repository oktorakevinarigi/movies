import Image from "next/image";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import dynamic from "next/dynamic";

import { MovieIcon } from "@/components/user-interfaces/icons";
import { ULR_IMAGE } from "@/constants";
import { YoutubeSection } from "@/components/general";
const Modal = dynamic(() => import("@/components/user-interfaces").then(m => m.Modal), {
  ssr: false,
});

dayjs.extend(duration);

type BannerDetailMobileProps = {
  onWatch: () => void;
  onClose: () => void;
  movieDetail?: {
    backdrop_path: string | null;
    title: string;
    poster_path: string | null;
    release_date: string;
    runtime: number;
    overview: string;
    genres: { id: number; name: string }[];
  };
  movieVideos: { type: string; key: string }[];
  modal: { visible: boolean };
};

export function BannerDetailMobile(props: BannerDetailMobileProps) {
  const { onClose, onWatch, movieDetail, movieVideos, modal } = props;

  return (
    <>
      <div className="relative h-screen">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full bg-gradient-to-t from-black to-transparent" />
        <Image
          src={
            movieDetail?.backdrop_path
              ? "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/" +
                movieDetail?.backdrop_path
              : "/images/no-images.jpg"
          }
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          alt={movieDetail?.title || ""}
          priority
        />
      </div>

      <div className="relative z-10 mx-auto -mt-64 w-fit px-5">
        <Image
          src={
            movieDetail?.poster_path
              ? ULR_IMAGE + movieDetail?.poster_path
              : "/images/no-images.jpg"
          }
          width={150}
          height={250}
          alt={movieDetail?.title || ""}
          className="mb-3 rounded-xl"
          priority
        />
        <button
          className="flex h-8 w-full items-center justify-center gap-1 rounded-full bg-slate-700/50 text-sm text-slate-100"
          onClick={onWatch}
        >
          <MovieIcon width="18px" height="18px" /> Tailer
        </button>
      </div>

      <div className="mt-5 flex-1 space-y-3 px-5">
        <p className="text-3xl font-semibold text-white">{movieDetail?.title}</p>
        <div className="flex items-center gap-2 text-sm text-white">
          {movieDetail?.release_date ? (
            <p>{dayjs(movieDetail?.release_date).format("YYYY")}</p>
          ) : null}
          {movieDetail?.runtime ? (
            <p>● {dayjs.duration(movieDetail?.runtime, "minutes").hours()} hours +</p>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2">
          {movieDetail?.genres.map(item => (
            <p
              key={item.id}
              className="rounded bg-slate-700/50 px-3 py-1 text-xs font-medium text-slate-100"
            >
              {item.name}
            </p>
          ))}
        </div>
        <p className=" text-sm leading-loose text-slate-100">{movieDetail?.overview}</p>
      </div>

      {modal.visible && movieVideos.length && (
        <Modal onClose={onClose} isOpen={modal.visible}>
          <div className="w-screen rounded-md bg-gray-700 p-2">
            <YoutubeSection id={movieVideos.find(movie => movie.type === "Trailer")?.key || ""} />
          </div>
        </Modal>
      )}
    </>
  );
}
