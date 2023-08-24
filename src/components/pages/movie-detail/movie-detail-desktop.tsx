import { Header, Footer, SimpleBlock } from "@/components/layouts";
import { BannerDetail, Review, Recommendation } from "../../features";

type MovieDetailPageDesktopProps = {
  id: string;
};

export function MovieDetailPageDesktop(props: MovieDetailPageDesktopProps) {
  const { id } = props;
  return (
    <>
      <div className="sticky top-0 z-20 bg-black bg-opacity-80">
        <Header isIcon />
      </div>
      <div className="bg-black">
        <div className="mb-10">
          <BannerDetail isMobile={false} id={id} />
        </div>
        <SimpleBlock className="flex flex-col gap-10 pb-10">
          <Review />
          <Recommendation isMobile={false} id={id} />
        </SimpleBlock>
      </div>
      <Footer isMobile={false} />
    </>
  );
}
