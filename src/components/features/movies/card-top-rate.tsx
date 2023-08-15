import Image from "next/image";
import Link from "next/link";

type CardTopRateProps = {
  id: string;
  title: string;
  genres: string;
  urlImage: string;
};

export function CardTopRate(props: CardTopRateProps) {
  const { id, urlImage, title, genres } = props;

  return (
    <Link
      href={`/movie/${id}`}
      className="flex min-h-[102px] w-[168px] min-w-[168px] flex-col gap-1 rounded-xl bg-[#343434] p-3"
    >
      <div className="relative h-[28px] w-[39px] overflow-hidden rounded-md">
        <Image
          src={urlImage}
          alt={title}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="39px"
        />
      </div>
      <p className="line-clamp-2 text-sm font-semibold text-white">{title}</p>
      {genres ? <p className="line-clamp-2 text-xs font-light text-[#656565]">{genres}</p> : null}
    </Link>
  );
}

export function CardTopRateSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-[102px] w-[168px] rounded-xl bg-slate-200" />
    </div>
  );
}
