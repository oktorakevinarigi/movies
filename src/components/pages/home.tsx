import { Header, Footer, Sidebar } from "@/components/layouts";
import { Banner, TopRate, NowPlaying } from "../feature";

export function HomePage() {
  return (
    <>
      <div className="fixed overflow-y-auto left-0 top-0 bottom-0">
        <Sidebar />
      </div>
      <div className="ml-[229px]">
        <Header />
        <Banner />
        <div className="px-10 flex flex-col gap-[18px]">
          <TopRate />
          <NowPlaying />
        </div>
        <Footer />
      </div>
    </>
  );
}
