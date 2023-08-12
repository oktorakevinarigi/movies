import { rest } from "msw";
import { faker } from "@faker-js/faker/locale/en";
import dayjs from "dayjs";

import { URL_API } from "@/constants";
import { IMovieResponseSchema, IMovieGenresResponseSchema } from "../movie-model";

const perPage = 10;
const total: number = Math.ceil(Math.random() * 100);
const maxPage: number = Math.ceil(total / perPage);
const pagination = {
  page: 1,
  perPage,
  maxPage,
  total,
};
const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
];

function generatePopularFake() {
  faker.seed(10);
  const results = Array.from(Array(10).keys()).map(() => {
    return {
      adult: faker.datatype.boolean(),
      backdrop_path: "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
      genre_ids: faker.helpers.arrayElements(genres.map(genre => genre.id)),
      id: faker.number.int({ min: 1, max: 1000 }),
      original_language: "en",
      original_title: faker.lorem.lines(1),
      overview: faker.lorem.paragraph(5),
      popularity: faker.number.float({ min: 1, max: 10000 }),
      poster_path: "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
      release_date: dayjs(faker.date.anytime()).format("YYYY-MM-DD"),
      title: faker.lorem.lines(1),
      video: faker.datatype.boolean(),
      vote_average: faker.number.float({ min: 0, max: 10 }),
      vote_count: faker.number.int({ min: 1, max: 10000 }),
    };
  });
  return {
    page: pagination.page,
    results,
    total_pages: pagination.maxPage,
    total_results: pagination.total,
  };
}
export const getPopularFake = rest.get<never, never, IMovieResponseSchema>(
  `${URL_API}/3/movie/popular`,
  (_, res, ctx) => {
    return res(ctx.json(generatePopularFake()));
  },
);

export const getGenresFake = rest.get<never, never, IMovieGenresResponseSchema>(
  `${URL_API}/3/genre/movie/list`,
  (_, res, ctx) => {
    return res(ctx.json({ genres }));
  },
);
