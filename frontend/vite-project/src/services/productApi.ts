import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type ProductType = {
    id: number;
    name: string;
    price?: number;
  };

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductType[], void>({
            query: () => '/products',
        }),
    }),
});


export const { useGetProductsQuery } = productApi;