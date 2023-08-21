import { Footer, SimpleBlock } from "@/components/layouts";
import { BannerDetail, Review, Recommendation } from "../features";

type DetailPageProps = {
  id: string;
};

export function DetailPage(props: DetailPageProps) {
  const { id } = props;
  return (
    <div className="bg-[#080B1A]">
      <div className="mb-10">
        <BannerDetail isMobile={false} id={id} />
      </div>
      <SimpleBlock className="flex flex-col gap-10">
        <Review />
        <Recommendation id={id} />
      </SimpleBlock>
      <Footer />
    </div>
  );
}
