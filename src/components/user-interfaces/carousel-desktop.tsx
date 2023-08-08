import React, { LegacyRef } from "react";

type CarouselDesktopProps<Item> = {
  viewportRef: LegacyRef<HTMLDivElement>;
  slidesToShow: number;
  slideGap: string;
  scrollSnaps: number[];
  selectedIndex: number;
  scrollTo: (value: number) => void;
  slides: Item[];
  renderSlide: (arg: { slide: Item; index: number }) => React.ReactNode;
  showDotButton: boolean;
  className?: string;
};

export function CarouselDesktop<Item extends { id: number | string }>(
  props: CarouselDesktopProps<Item>,
) {
  const {
    viewportRef,
    slidesToShow = 2,
    scrollSnaps,
    selectedIndex,
    scrollTo,
    slides,
    renderSlide,
    showDotButton,
    className,
  } = props;

  return (
    <div className="relative">
      <div className="relative">
        <div className="overflow-hidden" ref={viewportRef}>
          <div className={`flex touch-pan-y -ml-4 ${className}`}>
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`relative flex-grow-0 flex-shrink-0 basis-[cal(100/${slidesToShow})%] pl-4 min-w-0`}
              >
                {renderSlide({ slide, index })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {showDotButton && (
        <div className="flex relative justify-center mt-[36px]">
          <div className="flex gap-2">
            {scrollSnaps.map((id, idx) => (
              <div
                key={id}
                className={`${
                  idx === selectedIndex
                    ? "w-[60px] h-3 bg-[#F00F00]"
                    : "bg-[#FFFFFF] bg-opacity-50 w-3 h-3"
                } rounded-full cursor-pointer`}
                onClick={() => scrollTo(idx)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
