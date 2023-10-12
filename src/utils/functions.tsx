import { COUNT_LIST_SHOW } from "./constValues";

export function Paginate(
  data: Array<any>,
  pageNumber: number,
  pageSize?: number
) {
  if (!pageSize) pageSize = COUNT_LIST_SHOW; //defualt size

  let startIndex = (pageNumber - 1) * pageSize;
  // if (searchState && searchState === true) startIndex = 0;
  const dataPaginated = [];
  for (let i = startIndex; i < startIndex + pageSize; i++) {
    if (data[i]) {
      dataPaginated.push(data[i]);
    }
  }
  return dataPaginated;
}
