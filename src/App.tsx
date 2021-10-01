import React, { useEffect, useState } from 'react';
import useHttp from './hooks/http-hook';
import Table from './components/Table/Table';

const App: React.FC = () => {
  const { request } = useHttp();
  const [cardOperationsData, setCardOperationsData] = useState();

  const getCardOperationsData = async () => {
    try {
      const response = await request(`https://api-dev.fidel.uk/v1d/programs/`, 'GET', null, {
        'fidel-key': 'sk_test_8b665908-284c-4dd1-a364-7ebc575c18f6',
      });
      if (response) {
        setCardOperationsData(response.items);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCardOperationsData();
  }, []);

  if (cardOperationsData === false) return null;

  console.log(cardOperationsData);

  return (
    <div className="container">
      <Table />
    </div>
  );
};
export default App;
