import { Footer, SimpleBlock } from "@/components/layouts";
import { BannerDetail, Review, Recommendation } from "../features";

type DetailPageProps = {
  id: string;
};

export function DetailPage(props: DetailPageProps) {
  const { id } = props;
  return (
    <>
      <BannerDetail />
      <SimpleBlock>
        <Review />
        <Recommendation id={id} />
      </SimpleBlock>
      <Footer />
    </>
  );
}
