import { Header, Footer, SimpleBlock } from "@/components/layouts";
import { BannerDetail, Review, Recommendation } from "../features";

type DetailPageProps = {
  id: string;
};

export function DetailPage(props: DetailPageProps) {
  const { id } = props;
  return (
    <>
      <div className="sticky top-0 z-20 bg-[#1e1e1e] bg-opacity-80">
        <Header isIcon />
      </div>
      <div className="bg-black">
        <div className="mb-10">
          <BannerDetail isMobile={false} id={id} />
        </div>
        <SimpleBlock className="flex flex-col gap-10">
          <Review />
          <Recommendation id={id} />
        </SimpleBlock>
      </div>
      <Footer />
    </>
  );
}
