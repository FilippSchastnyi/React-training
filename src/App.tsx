import React, { useEffect, useState } from 'react';
import useHttp from './hooks/http-hook';
import Table from './components/Table/Table';
import config from './config/default.json';
import Loader from './components/Loader/Loader';
import TableDetails from './components/Table/TableDetails/TableDetails';
import ReactPaginate from 'react-paginate';

const App: React.FC = () => {
  const { request, loading } = useHttp();
  const [cardOperationsData, setCardOperationsData] = useState<any>([]);
  const [sortDirection, setSortDirection] = useState<boolean>(true);
  const [rowDetails, setRowDetails] = useState<any>('');
  const [pageNumber, setPageNumber] = useState<number>(0);

  const pagination = {
    usersPerPage: 10,
    pagesVisited: function () {
      return pageNumber * this.usersPerPage;
    },
    displayUsers: function () {
      return cardOperationsData.slice(this.pagesVisited(), this.pagesVisited() + this.usersPerPage);
    },
    pageCount: function () {
      return Math.ceil(cardOperationsData.length / this.usersPerPage);
    },
    changePage: function ({ selected }: any) {
      setPageNumber(selected);
    },
  };

  const getCardOperationsData = async () => {
    try {
      const response = await request(`https://api-dev.fidel.uk/v1d/programs/`, 'GET', null, {
        'fidel-key': config.key,
      });
      if (response) {
        console.log(response.last);
        setCardOperationsData(response.items);
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
      const sortData = [...cardOperationsData].sort((a, b): any => {
        return a[fieldName] > b[fieldName] ? 1 : -1;
      });
      setCardOperationsData(sortData);
    } else {
      const sortData = [...cardOperationsData].sort((a, b): any => {
        return a[fieldName] > b[fieldName] ? -1 : 1;
      });
      setCardOperationsData(sortData);
    }

    setSortDirection(!sortDirection);
  };

  const setDetailsRow = (row: any) => {
    setRowDetails(row);
  };

  const removeTableDetails = () => {
    setRowDetails('');
  };

  if (!cardOperationsData) return null;

  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Table
            programsData={pagination.displayUsers()}
            sortTableByParams={sortTableByParams}
            direction={sortDirection}
            setDetailsRow={setDetailsRow}
          />
          <ReactPaginate
            previousLabel={'Previous'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            nextLabel={'Next'}
            pageCount={pagination.pageCount()}
            onPageChange={pagination.changePage}
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
