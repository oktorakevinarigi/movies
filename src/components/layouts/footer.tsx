import { IconMovieGray } from "@/components/user-interfaces";
import { SimpleBlock } from "./simple-block";

export function Footer() {
  return (
    <div className="flex h-40 items-center justify-between bg-black/[0.29]">
      <SimpleBlock className="flex flex-col items-center justify-between gap-4 text-[13px] text-[#929292] sm:flex-row">
        <p className="text-center">© 2021 MoovieTime. All rights reserved.</p>
        <IconMovieGray />
        <p>Made with NextJS</p>
      </SimpleBlock>
    </div>
  );
}
