import dynamic from "next/dynamic";
const MoviesPageDesktop = dynamic(() => import("./movies-desktop").then(m => m.MoviesPageDesktop));
const MoviesPageMobile = dynamic(() => import("./movies-mobile").then(m => m.MoviesPageMobile));

type MoviesPageProps = {
  isMobile: boolean;
};

export function MoviesPage(props: MoviesPageProps) {
  const { isMobile } = props;

  if (isMobile) {
    return <MoviesPageMobile />;
  }
  return <MoviesPageDesktop />;
}
