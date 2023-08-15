import { Header, Footer, SimpleBlock } from "@/components/layouts";
import { ListMovies } from "../features";

export function MoviesPageDesktop() {
  return (
    <>
      <Header />
      <SimpleBlock className="py-14">
        <ListMovies />
      </SimpleBlock>
      <Footer />
    </>
  );
}
