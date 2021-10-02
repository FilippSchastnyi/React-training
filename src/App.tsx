import React, { useEffect, useState } from 'react';
import useHttp from './hooks/http-hook';
import Table from './components/Table/Table';
import config from './config/default.json';

const App: React.FC = () => {
  const { request } = useHttp();
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

  if (!cardOperationsData) return null;

  return (
    <div className="container">
      <Table items={cardOperationsData} />
    </div>
  );
};
export default App;
