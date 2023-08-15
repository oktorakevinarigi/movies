import dynamic from "next/dynamic";
const HomeDesktopPage = dynamic(() => import("./home-desktop").then(m => m.HomeDesktopPage));
const HomeMobilePage = dynamic(() => import("./home-mobile").then(m => m.HomeMobilePage));

type HomePageProps = {
  isMobile: boolean;
};

export function HomePage(props: HomePageProps) {
  const { isMobile } = props;

  if (isMobile) {
    return <HomeMobilePage />;
  }
  return <HomeDesktopPage />;
}
