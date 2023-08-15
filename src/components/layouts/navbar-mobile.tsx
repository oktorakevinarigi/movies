import Link from "next/link";
import { cn } from "@/utils";
import { HomeIcon, MovieIcon } from "../user-interfaces";

type NavbarMobileProps = {
  pathName: string;
};

const white = "text-white";
const gary = "text-[#707070]";

export function NavbarMobile(props: NavbarMobileProps) {
  const { pathName } = props;
  return (
    <div className="sticky bottom-0 z-10 flex h-20 w-full justify-between border-t border-white bg-[#242A32]">
      <Link href="/" className="flex flex-1 flex-col items-center justify-center">
        <HomeIcon width="24px" height="24px" className={pathName === "/" ? white : gary} />
        <p className={cn("font-medium", pathName === "/" ? white : gary)}>Home</p>
      </Link>
      <Link href="/movies" className="flex flex-1 flex-col items-center justify-center">
        <MovieIcon width="24px" height="24px" className={pathName === "/movies" ? white : gary} />
        <p className={cn("font-medium", pathName === "/movies" ? white : gary)}>Movies</p>
      </Link>
    </div>
  );
}
