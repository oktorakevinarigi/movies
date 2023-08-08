"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Highlighter from "react-highlight-words";

import { useDebounce } from "@/utils";
import { IconSearch, IconSearchMovie } from "@/components/user-interfaces";
import { API_KEY } from "@/constants";

import { useGetMovieSearch } from "../feature/movie-queries";
import { Spinner } from "./spinner";

export function Header() {
  const [search, setSearch] = useState("");
  const [isList, setIsList] = useState(false);
  const deb = useDebounce(search, 500);

  const getMovieSearch = useGetMovieSearch(
    {
      api_key: API_KEY,
      query: deb,
      include_adult: false,
      language: "en-US",
      primary_release_year: "",
      page: "1",
      region: "",
      year: "",
    },
    { enabled: !!deb },
  );

  const boxListRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    function handlerClickToogle(event: Event) {
      const container = document.getElementById("container") as HTMLElement;
      if (!container.contains(event.target as HTMLElement)) {
        setIsList(false);
        setSearch("");
      }
    }
    document.addEventListener("click", handlerClickToogle);
    return () => {
      document.removeEventListener("click", handlerClickToogle);
    };
  }, []);

  function onChangeSearch(value: string) {
    setSearch(value);
  }

  return (
    <div className="h-10 w-full flex justify-center py-8">
      <div className="relative h-10">
        <IconSearchMovie className="absolute top-1/2 left-3 -translate-y-[50%]" />
        <input
          id="container"
          ref={boxListRef}
          type="text"
          className="rounded-xl w-full md:w-60 h-10 lg:w-[540px] bg-[#272727] shadow-lg bg-opacity-40 px-10 text-white outline-none text-sm"
          placeholder="search any movies....."
          onChange={e => onChangeSearch(e.target.value)}
          onClick={() => setIsList(true)}
          value={search}
        />
        <IconSearch className="absolute right-3 top-1/2 -translate-y-[50%]" />

        {/* List Search */}
        {isList && (
          <div className="absolute z-50 left-0 top-11 w-full">
            <div className="inset-0 flex items-end justify-center text-center sm:items-center w-full">
              <div className="bg-black bg-opacity-80 px-4 pb-4 pt-5 sm:p-6 sm:pb-4 space-y-2 transform rounded-lg text-left shadow-xl transition-all w-full max-h-[300px] overflow-y-auto">
                {getMovieSearch.isFetching ? (
                  <Spinner />
                ) : getMovieSearch.data?.results.length ? (
                  getMovieSearch.data?.results.map(item => {
                    if (item.poster_path) {
                      return (
                        <Link
                          key={item.id}
                          href={`/${item.id}`}
                          tabIndex={0}
                          className="text-white flex justify-between cursor-pointer hover:bg-blue-50 hover:text-black p-2"
                        >
                          <Highlighter
                            highlightClassName="font-semibold bg-transparent text-white"
                            searchWords={[deb]}
                            textToHighlight={item.title}
                            className="font-light line-clamp-1 text-sm"
                          />
                        </Link>
                      );
                    }
                  })
                ) : (
                  <div className="h-20 flex justify-center items-center text-slate-600 dark:text-slate-400 text-sm">
                    No results found
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
