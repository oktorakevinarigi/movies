"use client";
import { NowPlayingDesktop } from "./now-playing-desktop";
import { NowPlayingMobile } from "./now-playing-mobile";

type NowPlayingProps = {
  isMobile: boolean;
};

export function NowPlaying(props: NowPlayingProps) {
  const { isMobile } = props;
  if (isMobile) {
    return <NowPlayingMobile />;
  }
  return <NowPlayingDesktop />;
}
