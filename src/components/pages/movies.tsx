import { Header, Footer, SimpleBlock } from "@/components/layouts";
import { Movies } from "../feature";

export function MoviesPage() {
  return (
    <>
      <Header />
      <SimpleBlock className="py-14">
        <Movies />
      </SimpleBlock>
      <Footer />
    </>
  );
}
