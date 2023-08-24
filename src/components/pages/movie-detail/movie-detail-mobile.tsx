import { Header, Footer, SimpleBlock } from "@/components/layouts";
import { BannerDetail, Review, Recommendation } from "../../features";

type MovieDetailPageMobileProps = {
  id: string;
};

export function MovieDetailPageMobile(props: MovieDetailPageMobileProps) {
  const { id } = props;
  return (
    <>
      <div className="sticky top-0 z-20 bg-black bg-opacity-80">
        <Header isIcon />
      </div>
      <div className="bg-black">
        <div className="mb-5">
          <BannerDetail isMobile id={id} />
        </div>
        <SimpleBlock className="flex flex-col gap-10 pb-5">
          <Review />
          <Recommendation isMobile id={id} />
        </SimpleBlock>
      </div>
      <Footer isMobile />
    </>
  );
}
