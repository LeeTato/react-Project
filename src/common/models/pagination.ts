export interface PaginationQueryParams {
  page: number;
  pageSize: number;
}

export interface PaginatedResult<ResultType> {
  // A list of objects representing the current page of data in the result set.
  results: ResultType[];

  meta: {
    // The current page in the full result set that the data array represents.
    page: number;
    // The number of items in a page.
    pageSize: number;
    // The total number of items in the full result set.
    count: number;
    // The total number of pages in the full result set.
    pageCount: number;
  };

  links: {
    // Link to get the first page of data.
    fist: string;
    // Link to get the last page of data.
    last: string;
    // Link to get the next page of data. Can be null if the result set does not contain a next page.
    next: string | null;
    // Link to get the previous page of data. Can be null if the result set does not contain a previous page.
    prev: string | null;
  };
}

export const isPaginatedResult = <T>(data: PaginatedResult<T> | unknown): data is PaginatedResult<T> => {
  return (
    (data as PaginatedResult<T>)?.results !== undefined &&
    (data as PaginatedResult<T>)?.meta !== undefined &&
    (data as PaginatedResult<T>)?.links !== undefined
  );
};
