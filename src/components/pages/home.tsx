import { Header, Footer, Sidebar } from "@/components/layouts";
import { BannerMovie, TopRate, NowPlaying } from "../feature";

export function HomePage() {
  return (
    <>
      <div className="fixed bottom-0 left-0 top-0 hidden overflow-y-auto md:block">
        <Sidebar />
      </div>
      <div className="md:ml-[229px]">
        <Header />
        <div className="my-8 w-full px-5 sm:px-0">
          <BannerMovie />
        </div>
        <div className="mb-10 flex flex-col gap-[18px] px-5 sm:px-10">
          <TopRate />
          <NowPlaying />
        </div>
        <Footer />
      </div>
    </>
  );
}
