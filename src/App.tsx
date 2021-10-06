import React, { useEffect, useState } from 'react';
import useHttp from './hooks/http-hook';
import Table from './components/Table/Table';
import config from './config/default.json';
import Loader from './components/Loader/Loader';
import TableDetails from './components/Table/TableDetails/TableDetails';
import ReactPaginate from 'react-paginate';
import { ITableData } from './interfaces/Table/ITableData';
import { paginationSettings } from './Helper/PaginationHelper';

const App: React.FC = () => {
  const { request, loading } = useHttp();
  const [cardOperationsData, setCardOperationsData] = useState<ITableData[]>([]);
  const [sortDirection, setSortDirection] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [rowDetails, setRowDetails] = useState<ITableData | undefined>(undefined);

  const getCardOperationsData = async () => {
    try {
      const response = await request(
        `https://api-dev.fidel.uk/v1d/programs/?limit=10`,
        'GET',
        null,
        {
          'fidel-key': config.key,
        }
      );
      if (response) {
        const secondResponse = await request(
          `https://api-dev.fidel.uk/v1d/programs/?limit=1/&start=${encodeURIComponent(
            JSON.stringify(response.last)
          )}`,
          'GET',
          null,
          {
            'fidel-key': config.key,
          }
        );
        console.log(secondResponse);
        setCardOperationsData([...response.items, ...secondResponse.items]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCardOperationsData();
  }, []);

  const sortTableByParams = (fieldName: string) => {
    if (sortDirection) {
      const sortData = [...cardOperationsData].sort((a: any, b: any) => {
        return a[fieldName] > b[fieldName] ? 1 : -1;
      });
      setCardOperationsData(sortData);
    } else {
      const sortData = [...cardOperationsData].sort((a: any, b: any) => {
        return a[fieldName] > b[fieldName] ? -1 : 1;
      });
      setCardOperationsData(sortData);
    }

    setSortDirection(!sortDirection);
  };

  const setDetailsRow = (row: ITableData) => {
    setRowDetails(row);
  };

  const removeTableDetails = () => {
    setRowDetails(undefined);
  };

  const { displayUsers, pageCount, changePage } = paginationSettings(
    pageNumber,
    cardOperationsData,
    setPageNumber,
    10
  );

  if (!cardOperationsData) return null;
  console.log(cardOperationsData);

  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Table
            programsData={displayUsers}
            sortTableByParams={sortTableByParams}
            direction={sortDirection}
            setDetailsRow={setDetailsRow}
          />
          <ReactPaginate
            previousLabel={'Previous'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            nextLabel={'Next'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'pagination'}
            previousLinkClassName={'page-link'}
            nextLinkClassName={'page-link'}
            disabledClassName={'disabled'}
            activeClassName={'active'}
            pageRangeDisplayed={2}
            marginPagesDisplayed={0}
          />
          <TableDetails rowData={rowDetails} removeTableDetails={removeTableDetails} />
        </>
      )}
    </div>
  );
};
export default App;
