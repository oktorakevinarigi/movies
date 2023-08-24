import dayjs from "dayjs";
import { motion } from "framer-motion";

import { getGenre } from "@/utils";
import { ULR_IMAGE } from "@/constants";
import { Card } from "./card";

type RecommendationMobileProps = {
  movieGenres: { id: number; name: string }[];
  movieRecommendations: {
    id: number;
    title: string;
    poster_path: string | null;
    genre_ids: number[];
    release_date: string;
    vote_average: number;
  }[];
};

export function RecommendationMobile(props: RecommendationMobileProps) {
  const { movieGenres, movieRecommendations } = props;

  return (
    <div>
      <p className="mb-3 text-2xl font-bold text-slate-100">Recommendations</p>
      <motion.div
        variants={{ hidden: {}, show: {} }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4"
      >
        {movieRecommendations.slice(0, 6).map((item, index) => (
          <Card
            key={item.id}
            isMobile
            index={index}
            id={item.id}
            urlImage={item.poster_path ? ULR_IMAGE + item.poster_path : ""}
            title={item.title}
            genre={getGenre(item.genre_ids, movieGenres)}
            year={item.release_date ? dayjs(item.release_date).format("YYYY") : ""}
            ratings={item.vote_average}
          />
        ))}
      </motion.div>
    </div>
  );
}
