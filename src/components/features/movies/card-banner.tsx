import { CardBannerDesktop, CardBannerDesktopSkeleton } from "./card-banner-desktop";
import { CardBannerMobile, CardBannerMobileSkeleton } from "./card-banner-mobile";

type CardBannerProps = {
  isMobile: boolean;
  onDetail: (id: string) => void;
  id: string;
  title: string;
  date: string;
  genres: string;
  overview: string;
  onWatch: (id: string) => void;
  urlImage: string;
};

export function CardBanner(props: CardBannerProps) {
  const { isMobile, ...rest } = props;

  if (isMobile) {
    return <CardBannerMobile {...rest} />;
  }
  return <CardBannerDesktop {...rest} />;
}

export type CardBannerSkeletonProps = { isMobile: boolean };
export function CardBannerSkeleton(props: CardBannerSkeletonProps) {
  const { isMobile } = props;

  if (isMobile) {
    return <CardBannerMobileSkeleton />;
  }
  return <CardBannerDesktopSkeleton />;
}
