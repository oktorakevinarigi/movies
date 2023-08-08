import { ContentMovies } from "./content-movies";
import { Filter } from "./filter";

export function Movies() {
  return (
    <>
      <div className="mb-3 h-[6px] w-28 bg-[#E74C3C]" />
      <p className="text-primary mb-14 text-2xl font-semibold">Movies</p>

      <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
        <Filter />
        <ContentMovies />
      </div>
    </>
  );
}
