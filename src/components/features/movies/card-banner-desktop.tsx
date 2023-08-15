import Image from "next/image";

type CardBannerDesktopProps = {
  onDetail: (id: string) => void;
  id: string;
  title: string;
  date: string;
  genres: string;
  overview: string;
  onWatch: (id: string) => void;
  urlImage: string;
};

export function CardBannerDesktop(props: CardBannerDesktopProps) {
  const { onDetail, id, title, date, genres, overview, onWatch, urlImage } = props;

  return (
    <div
      onClick={() => {
        onDetail(id);
      }}
      className="flex h-[290px] w-[704px] cursor-pointer overflow-hidden rounded-[20px] bg-black"
    >
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <p className="mb-2 line-clamp-2 text-4xl font-bold text-white">{title}</p>
          <div className="mb-2 flex items-center gap-1 font-normal">
            {date ? <p className="text-xs text-white">{date}</p> : null}

            <div className="h-[6px] w-[6px] rounded-full bg-white bg-opacity-50" />
            {genres ? <p className="line-clamp-2 text-xs text-white">{genres}</p> : null}
          </div>
          {overview ? (
            <p className="mb-4 line-clamp-4 text-xs font-light text-[#6A6A6A]">{overview}</p>
          ) : null}
        </div>
        <button
          onClick={e => {
            e.stopPropagation();
            onWatch(id);
          }}
          className="h-9 w-[97px] rounded-[10px] bg-[#F00F00] text-xl font-semibold text-white shadow-[1px_1px_14px_0px_#F00]"
        >
          Watch
        </button>
      </div>
      <div className="relative flex-[1.5] before:absolute before:inset-0 before:z-10 before:bg-gradient-to-r before:from-black before:from-[5%] before:to-transparent before:to-[95%]">
        <Image
          src={urlImage}
          alt={title}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="400px"
          priority
        />
      </div>
    </div>
  );
}

export function CardBannerDesktopSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-[290px] w-[704px] rounded-[20px] bg-slate-200" />
    </div>
  );
}
