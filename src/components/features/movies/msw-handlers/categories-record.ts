import { rest } from "msw";
import { faker } from "@faker-js/faker/locale/en";
import { z } from "zod";

import { URL_API } from "@/constants";
import { movieGenresResponseSchema } from "../movie-model";

export function generateFakeCategories() {
  faker.seed(10);
  const result = Array.from(Array(10).keys()).map(() => {
    return {
      name: faker.music.genre(),
      id: faker.number.int({ min: 1, max: 1e5 }),
    };
  });
  return { genres: result };
}

export const getCategories = rest.get<never, never, z.infer<typeof movieGenresResponseSchema>>(
  `${URL_API}/3/genre/movie/list`,
  (_, res, ctx) => {
    return res(ctx.json(generateFakeCategories()));
  },
);
