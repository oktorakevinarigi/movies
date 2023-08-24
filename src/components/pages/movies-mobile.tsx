import { Header, Footer, SimpleBlock, Navbar } from "@/components/layouts";
import { ListMovies } from "../features";

export function MoviesPageMobile() {
  return (
    <>
      <Header />
      <SimpleBlock className="py-14">
        <ListMovies />
      </SimpleBlock>
      <Footer isMobile />

      <Navbar isMobile />
    </>
  );
}
