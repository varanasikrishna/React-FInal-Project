import Header from './Header';
import Table from './Table';
import Footer from './Footer';
import Stats from './Stats';
import { useState } from 'react';

export default function GradeBook() {
  const [st, sSt] = useState(true);
  const [statistics, setStatistics] = useState('Show Statstics');
  const stat = () => {
    if (st) {
      sSt(false);
      setStatistics('Hide Statstics');
    } else {
      sSt(true);
      setStatistics('Show Statstics');
    }
  };

  return (
    <>
      <Header />
      <Table />
      {st || (
        <div className="App-header3">
          <Stats />
        </div>
      )}
      <Footer />

      <br></br>
      <button className="statsBtn" onClick={stat}>
        {statistics}
      </button>
    </>
  );
}
