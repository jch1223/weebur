import ky from 'ky';

export type SortByOptions = 'rating' | (string & {});

export interface ProductsFilter {
  query?: string;
  sortBy?: SortByOptions;
  order?: 'asc' | 'desc';
}

export interface ProductsParams {
  limit: number;
  skip: number;
  filter: ProductsFilter;
}

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  rating: number;
  reviews: Review[];
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const productsApi = {
  getProducts: async ({ limit, skip, filter }: ProductsParams) => {
    const response = await ky<ProductsResponse>(
      'https://dummyjson.com/products/search',
      {
        searchParams: {
          q: filter?.query ?? '',
          sortBy: filter?.sortBy ?? '',
          order: filter?.order ?? '',
          skip: skip.toString(),
          limit: limit.toString(),
          select: [
            'title',
            'description',
            'thumbnail',
            'rating',
            'reviews',
          ].join(','),
        },
      }
    );
    return response.json();
  },
};
