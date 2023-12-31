"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { queryToString } from "@/utils";
import { API_KEY } from "@/constants";
import { useGetMovieGenres } from "./movie-queries";
// const dataSort = [
//   {
//     name: "Popularity Ascending",
//     value: "popularity.asc",
//   },
//   {
//     name: "Popularity Descending",
//     value: "popularity.desc",
//   },
//   {
//     name: "Release Date Ascending",
//     value: "primary_release_date.asc",
//   },
//   {
//     name: "Release Date Descending",
//     value: "primary_release_date.desc",
//   },
//   {
//     name: "Rating Ascending",
//     value: "vote_average.asc",
//   },
//   {
//     name: "Rating Descending",
//     value: "vote_average.desc",
//   },
// ];

function getGenre(data: string) {
  if (data) {
    if (data.includes(",")) {
      return data.split(",");
    }
    return [data];
  }
  return [];
}

export function Filter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const sort = searchParams.get("sort");

  const getMovieGenres = useGetMovieGenres({ api_key: API_KEY, language: "en" });

  // function onSort(value: string) {
  //   router.push(`/movies${queryToString({ genre, sort: value })}`);
  // }

  function onGenre(id: number, value: boolean) {
    let tmp = [];
    if (value) {
      const data = [...getGenre(genre || ""), id.toString()];
      tmp = data;
    } else {
      tmp = getGenre(genre || "").filter(item => item !== id.toString());
    }
    router.push(`/movies${queryToString({ genre: tmp, sort })}`);
  }

  return (
    <div className="h-fit w-60 rounded-lg bg-gradient-to-b from-[#0E1723] to-transparent">
      {/* <p className="text-primary border-b border-white border-opacity-5 p-5 font-semibold">
        Sort Result By
      </p> */}
      {/* <div className="px-5 pt-5 pb-[31px] border-b border-white border-opacity-5">
        <Select onValueChange={onSort} value={sort || undefined}>
          <SelectTrigger className="bg-white bg-opacity-[0.13] h-9 text-primary border-none text-sm text-left">
            <SelectValue placeholder="Popularity" />
          </SelectTrigger>
          <SelectContent className="text-white bg-[#111419] border-none rounded-t-none text-sm">
            {dataSort.map(item => (
              <SelectItem
                key={item.value}
                value={item.value}
                className="hover:bg-blue-50 hover:text-black"
              >
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div> */}
      <p className="mb-[18px] border-b border-white border-opacity-5 p-5 font-semibold text-white">
        Genres
      </p>
      <div className="flex flex-col gap-4 px-5 pb-5">
        {getMovieGenres.data?.genres.map(item => (
          <div key={item.id} className="flex justify-between">
            <p className="text-white">{item.name}</p>
            <input
              type="checkbox"
              className="text-red-500 accent-[#E74C3C]"
              onChange={e => onGenre(item.id, e.target.checked)}
              checked={getGenre(genre || "").includes(item.id.toString())}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
