/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Server
 * OpenAPI spec version: 1.0
 */
export type ProductColor = (typeof ProductColor)[keyof typeof ProductColor];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ProductColor = {
  RED: "RED",
  GREEN: "GREEN",
  BLUE: "BLUE",
  YELLOW: "YELLOW",
  BLACK: "BLACK",
  WHITE: "WHITE",
} as const;

/**
 * Product
 */
export interface Product {
  id: string;
  name: string;
  images: string;
  description: string;
  category: string;
  price: number;
  color: ProductColor;
}

/**
 * User
 */
export interface User {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  role: string;
}

export type ProductsIndexResponseAllOf = {
  products?: Product[];
};

export type ProductsIndexResponse = ProductsIndexResponseAllOf;

export type ProductsShowResponse = Product;

export type UsersIndexResponseAllOf = {
  users?: User[];
};

export type UsersIndexResponse = UsersIndexResponseAllOf;

export type UsersShowResponse = User;