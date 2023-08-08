import { Header, Footer, Sidebar } from "@/components/layouts";
import { Banner, TopRate, NowPlaying } from "../feature";

export function HomePage() {
  return (
    <>
      <div className="fixed bottom-0 left-0 top-0 overflow-y-auto">
        <Sidebar />
      </div>
      <div className="ml-[229px]">
        <Header />
        <Banner />
        <div className="mb-10 flex flex-col gap-[18px] px-10">
          <TopRate />
          <NowPlaying />
        </div>
        <Footer />
      </div>
    </>
  );
}
