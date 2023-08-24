import { IconMovieGray } from "@/components/user-interfaces";

export function FooterDesktop() {
  return (
    <div className="flex h-40 items-center justify-between bg-black/30 px-10 text-sm text-white">
      <p>© 2023 MoovieTime. All rights reserved.</p>
      <IconMovieGray />
      <p>Made with NextJS</p>
    </div>
  );
}
