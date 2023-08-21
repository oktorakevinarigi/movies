import { CardReviewDesktop } from "./card-review-desktop";

type CardReviewProps = {
  isMobile: boolean;
  name: string;
  date: string;
  ratings: number | null;
  content: string;
  urlImage: string | null;
  loadMore: number | undefined;
  index: number;
  onLoadMore: (index: number) => void;
};

export function CardReview(props: CardReviewProps) {
  const { isMobile, ...rest } = props;

  if (isMobile) {
    return null;
  }
  return <CardReviewDesktop {...rest} />;
}
