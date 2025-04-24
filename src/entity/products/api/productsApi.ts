import ky from 'ky';

export interface ProductsFilter {
  search?: string;
  sortBy?: 'rating';
  order?: 'asc' | 'desc';
}

export interface ProductsParams {
  limit: number;
  skip: number;
  filter: ProductsFilter;
}

export interface ProductsResponse {
  products: {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    rating: number;
    reviews: number;
  }[];
  total: number;
  skip: number;
  limit: number;
}

export const productsApi = {
  getProducts: async ({ limit = 10, skip = 0, filter }: ProductsParams) => {
    const response = await ky<ProductsResponse>(
      'https://dummyjson.com/products/search',
      {
        searchParams: {
          q: filter?.search ?? '',
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
