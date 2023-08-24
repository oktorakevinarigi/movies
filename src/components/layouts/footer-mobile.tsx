import { IconMovieGray } from "@/components/user-interfaces";

export function FooterMobile() {
  return (
    <div className="flex flex-col items-center justify-between gap-5 bg-black/30 px-10 py-5 text-sm text-white">
      <p>© 2023 MoovieTime. All rights reserved.</p>
      <IconMovieGray />
      <p>Made with NextJS</p>
    </div>
  );
}
