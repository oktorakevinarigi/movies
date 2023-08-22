import Image from "next/image";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import dynamic from "next/dynamic";

import { MovieIcon } from "@/components/user-interfaces/icons";
import { ULR_IMAGE } from "@/constants";
import { YoutubeSection } from "@/components/general";
import { SimpleBlock } from "../../layouts/simple-block";
const Modal = dynamic(() => import("@/components/user-interfaces").then(m => m.Modal), {
  ssr: false,
});

dayjs.extend(duration);

type BannerDetailDesktopProps = {
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

export function BannerDetailDesktop(props: BannerDetailDesktopProps) {
  const { onClose, onWatch, movieDetail, movieVideos, modal } = props;

  return (
    <>
      <div className="relative h-screen">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full bg-gradient-to-t from-black to-transparent" />
        <Image
          src={
            movieDetail?.backdrop_path
              ? "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/" + movieDetail.backdrop_path
              : "/images/no-images.jpg"
          }
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          alt={movieDetail?.title || ""}
          priority
        />
      </div>
      <SimpleBlock className="relative z-10 -mt-48 flex gap-10">
        <div>
          <Image
            src={
              movieDetail?.poster_path
                ? ULR_IMAGE + movieDetail.poster_path
                : "/images/no-images.jpg"
            }
            width={220}
            height={330}
            alt={movieDetail?.title || ""}
            className="mb-3 rounded-xl"
            priority
          />
          <button
            className="flex h-10 w-full items-center justify-center gap-1 rounded-full bg-slate-700/50 text-slate-100"
            onClick={onWatch}
          >
            <MovieIcon width="20px" height="20px" /> Tailer
          </button>
        </div>
        <div className="mt-5 flex-1 space-y-3">
          <p className="text-3xl font-semibold text-white">{movieDetail?.title}</p>
          <div className="flex items-center gap-2 text-sm text-white">
            {movieDetail?.release_date ? (
              <p>{dayjs(movieDetail.release_date).format("YYYY")}</p>
            ) : null}
            {movieDetail?.runtime ? (
              <p>● {dayjs.duration(movieDetail.runtime, "minutes").hours()} hours +</p>
            ) : null}
          </div>

          <div className="flex gap-2">
            {movieDetail?.genres.map(item => (
              <p
                key={item.id}
                className="rounded bg-slate-700/50 px-3 py-1 text-xs font-medium text-slate-100"
              >
                {item.name}
              </p>
            ))}
          </div>
          <p className="w-3/5 text-sm leading-loose text-slate-100">{movieDetail?.overview}</p>
        </div>
      </SimpleBlock>

      {modal.visible && movieVideos.length && (
        <Modal onClose={onClose} isOpen={modal.visible}>
          <YoutubeSection id={movieVideos.find(movie => movie.type === "Trailer")?.key || ""} />
        </Modal>
      )}
    </>
  );
}
