import { HomeDesktopPage } from "./home-desktop";
import { HomeMobilePage } from "./home-mobile";

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
