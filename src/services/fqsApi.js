import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = "http://localhost:7000/api/";

// Define a service using a base URL and expected endpoints
export const fqsApi = createApi({
  reducerPath: "fqsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    //login

    loginUser: builder.query({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
    }),

    verifyCode: builder.query({
      query: (code) => ({
        url: `verify-code/${code}`,
      }),
    }),

    getEmployeeDetails: builder.query({
      query: (data) => ({
        url: "employee-details",
        method: "POST",
        body: data,
      }),
    }),
    getEmployeeItems: builder.query({
      query: (Proximity) => ({
        url: `employee-items/${Proximity}`,
      }),
    }),
    getOptions: builder.query({
      query: (data) => ({
        url: `get-options`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLazyLoginUserQuery,
  useLazyVerifyCodeQuery,
  useLazyGetEmployeeDetailsQuery,
  useLazyGetEmployeeItemsQuery,
  useLazyGetOptionsQuery,
} = fqsApi;
