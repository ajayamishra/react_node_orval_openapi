import { rest } from 'msw';
import { getProductsIndexMock, getUsersIndexMock } from '../models/generated';

export const handlers = [
  rest.get("/api/p/users", (_req, res, ctx) => {
    return res(
      ctx.delay(100),
      ctx.status(200, "Mocked status"),
      ctx.json(getUsersIndexMock()),
    );
  }),
  rest.get("/api/p/products", (_req, res, ctx) => {
    return res(
      ctx.delay(100),
      ctx.status(200, "Mocked status"),
      ctx.json(getProductsIndexMock()),
    );
  }),
];