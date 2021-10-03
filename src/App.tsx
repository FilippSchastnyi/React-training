import React, { useEffect, useState } from 'react';
import useHttp from './hooks/http-hook';
import Table from './components/Table/Table';
import config from './config/default.json';
import Loader from './components/Loader/Loader';

const App: React.FC = () => {
  const { request, loading } = useHttp();
  const [cardOperationsData, setCardOperationsData] = useState<any>([]);

  const getCardOperationsData = async () => {
    try {
      const response = await request(config.fidelUrl, 'GET', null, {
        'fidel-key': config.key,
      });
      if (response) {
        console.log(response.items);
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
    const sortData = [...cardOperationsData].sort((a, b): any => {
      return a[fieldName] > b[fieldName] ? 1 : -1;
    });
    setCardOperationsData(sortData);
  };

  if (!cardOperationsData) return null;

  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : (
        <Table programsData={cardOperationsData} sortTableByParams={sortTableByParams} />
      )}
    </div>
  );
};
export default App;
