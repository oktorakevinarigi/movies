import { Header, Footer, Sidebar } from "@/components/layouts";
import { BannerMovie, TopRate, NowPlaying } from "../../features";

export function HomeDesktopPage() {
  return (
    <>
      <div className="fixed bottom-0 left-0 top-0 block overflow-y-auto">
        <Sidebar />
      </div>
      <div className="ml-[229px]">
        <Header />
        <div className="my-8 h-[338px] w-full px-0">
          <BannerMovie isMobile={false} />
        </div>
        <div className="mb-10 flex flex-col gap-[18px] px-10">
          <TopRate />
          <NowPlaying isMobile={false} />
        </div>
        <Footer isMobile={false} />
      </div>
    </>
  );
}
