import { ITableData } from '../interfaces/Table/ITableData';

export const paginationSettings = (
  pageNumber: number,
  cardOperationsData: ITableData[],
  setPageNumber: (selected: number) => void,
  usersPerPage: number
) => {
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = cardOperationsData.slice(pagesVisited, pagesVisited + usersPerPage);
  const pageCount = Math.ceil(cardOperationsData.length / usersPerPage);
  const changePage = function ({ selected }: any) {
    setPageNumber(selected);
  };
  return {
    pagesVisited,
    displayUsers,
    pageCount,
    changePage,
  };
};
