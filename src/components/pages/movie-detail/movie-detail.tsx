import dynamic from "next/dynamic";
const MovieDetailPageDesktop = dynamic(() =>
  import("./movie-detail-desktop").then(m => m.MovieDetailPageDesktop),
);
const MovieDetailPageMobile = dynamic(() =>
  import("./movie-detail-mobile").then(m => m.MovieDetailPageMobile),
);

type MovieDetailPageProps = {
  isMobile: boolean;
  id: string;
};

export function MovieDetailPage(props: MovieDetailPageProps) {
  const { isMobile, id } = props;

  if (isMobile) {
    return <MovieDetailPageMobile id={id} />;
  }
  return <MovieDetailPageDesktop id={id} />;
}
