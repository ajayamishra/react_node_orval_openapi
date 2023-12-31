/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Server
 * OpenAPI spec version: 1.0
 */
import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import type {
  UseQueryOptions,
  QueryFunction,
  UseQueryResult,
  QueryKey,
} from "@tanstack/react-query";
import type { ProductsIndexResponse } from "./api.schemas";
import { rest } from "msw";
import { faker } from "@faker-js/faker";

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * @summary Get Products
 */
export const productsIndex = (
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<ProductsIndexResponse>> => {
  return axios.get(`/api/p/products`, options);
};

export const getProductsIndexQueryKey = () => [`/api/p/products`] as const;

export const getProductsIndexQueryOptions = <
  TData = Awaited<ReturnType<typeof productsIndex>>,
  TError = AxiosError<unknown>,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof productsIndex>>,
    TError,
    TData
  >;
  axios?: AxiosRequestConfig;
}): UseQueryOptions<
  Awaited<ReturnType<typeof productsIndex>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getProductsIndexQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof productsIndex>>> = ({
    signal,
  }) => productsIndex({ signal, ...axiosOptions });

  return { queryKey, queryFn, ...queryOptions };
};

export type ProductsIndexQueryResult = NonNullable<
  Awaited<ReturnType<typeof productsIndex>>
>;
export type ProductsIndexQueryError = AxiosError<unknown>;

/**
 * @summary Get Products
 */
export const useProductsIndex = <
  TData = Awaited<ReturnType<typeof productsIndex>>,
  TError = AxiosError<unknown>,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof productsIndex>>,
    TError,
    TData
  >;
  axios?: AxiosRequestConfig;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getProductsIndexQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const getProductsIndexMock = () => ({
  products: faker.helpers.arrayElement([
    Array.from(
      { length: faker.datatype.number({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      id: faker.random.word(),
      name: faker.random.word(),
      images: faker.random.word(),
      description: faker.random.word(),
      category: faker.random.word(),
      price: faker.datatype.number({ min: undefined, max: undefined }),
      color: faker.helpers.arrayElement([
        "RED",
        "GREEN",
        "BLUE",
        "YELLOW",
        "BLACK",
        "WHITE",
      ]),
    })),
    undefined,
  ]),
});

export const getProductsMSW = () => [
  rest.get("*/api/p/products", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getProductsIndexMock()),
    );
  }),
];
