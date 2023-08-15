import dynamic from "next/dynamic";
import dayjs from "dayjs";

import { getGenre } from "@/utils";
import { ULR_IMAGE } from "@/constants";
import { YoutubeSection } from "@/components/general";
import { Carousel } from "../../user-interfaces";
import { CardBanner } from "./card-banner";
const Modal = dynamic(() => import("@/components/user-interfaces").then(m => m.Modal), {
  ssr: false,
});

type BannerMovieMobileProps = {
  moviePopular: {
    genre_ids: number[];
    id: number;
    overview: string;
    poster_path: string | null;
    release_date: string;
    title: string;
  }[];
  movieGenres: { id: number; name: string }[];
  movieVideos: { type: string; key: string }[];
  onWatch: (id: string) => void;
  onClose: () => void;
  onDetail: (id: string) => void;
  visible: boolean;
};

export function BannerMovieMobile(props: BannerMovieMobileProps) {
  const { moviePopular, movieGenres, movieVideos, onWatch, onClose, onDetail, visible } = props;

  return (
    <>
      <Carousel
        slides={moviePopular.slice(0, 6)}
        options={{ loop: true }}
        renderSlide={({ slide }) => (
          <CardBanner
            isMobile
            date={slide.release_date ? dayjs(slide.release_date).format("YYYY") : ""}
            genres={getGenre(slide.genre_ids, movieGenres)}
            id={slide.id.toString()}
            overview={slide.overview}
            title={slide.title}
            urlImage={ULR_IMAGE + slide.poster_path}
            onDetail={onDetail}
            onWatch={onWatch}
          />
        )}
      />

      {visible && movieVideos.length && (
        <Modal onClose={onClose} isOpen={visible}>
          <YoutubeSection id={movieVideos.find(movie => movie.type === "Trailer")?.key || ""} />
        </Modal>
      )}
    </>
  );
}
