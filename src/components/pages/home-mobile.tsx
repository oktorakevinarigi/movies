import { Header, Footer, Navbar } from "@/components/layouts";
import { BannerMovie, TopRate, NowPlaying } from "../features";

export function HomeMobilePage() {
  return (
    <>
      <Header />
      <div className="my-8 h-[338px] w-full px-5">
        <BannerMovie isMobile />
      </div>
      <div className="mb-10 flex flex-col gap-[18px] px-5">
        <TopRate />
        <NowPlaying />
      </div>
      <Footer />

      <Navbar isMobile />
    </>
  );
}
