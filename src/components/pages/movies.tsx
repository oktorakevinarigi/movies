import { Header, Footer, SimpleBlock } from "@/components/layouts";
import { Movies } from "../feature";

export function MoviesPage() {
  return (
    <>
      <div className="bg-body h-[66px] bg-opacity-5">
        <Header />
      </div>
      <div className="absolute -z-10 h-[315px] w-full bg-white bg-opacity-[0.05]" />

      <SimpleBlock className="py-14">
        <Movies />
      </SimpleBlock>

      <Footer />
    </>
  );
}
