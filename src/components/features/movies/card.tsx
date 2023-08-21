"use client";
import { CardDesktop, CardDesktopSkeleton } from "./card-desktop";
import { CardMobile, CardMobileSkeleton } from "./card-mobile";

type CardProps = {
  isMobile: boolean;
  index?: number;
  id: number;
  urlImage: string;
  title: string;
  year: string;
  ratings: number;
  genre: string;
};

export function Card(props: CardProps) {
  const { isMobile, ...rest } = props;
  if (isMobile) {
    return <CardMobile {...rest} />;
  }
  return <CardDesktop {...rest} />;
}

export type CardSkeletonProps = { isMobile: boolean };
export function CardSkeleton(props: CardSkeletonProps) {
  const { isMobile } = props;

  if (isMobile) {
    return <CardMobileSkeleton />;
  }
  return <CardDesktopSkeleton />;
}
