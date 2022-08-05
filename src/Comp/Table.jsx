import { useState } from 'react';
import batch1 from './batch1';
import StudentList from './StudentList';
// import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons';

const intData = batch1;

export default function Table() {
  const data = intData;
  const [searchText, setSearchText] = useState('');
  const [filterBy, setFilterBy] = useState('all');
  const [sortByT, setSortByT] = useState('Sort (A-Z)');
  const [sortByN, setSortByN] = useState('Sort (1-10)');

  let filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchText)
  );
  filteredData = filteredData.filter(item => {
    if (filterBy === 'pass') {
      return item.FinalS;
    } else if (filterBy === 'fail') {
      return !item.FinalS;
    } else return true;
  });

  if (sortByT === 'Z-A') {
    filteredData = filteredData.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
  }

  if (sortByT === 'A-Z') {
    filteredData = filteredData.sort((b, a) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
  }

  if (sortByN === '10-1') {
    filteredData = filteredData.sort((a, b) => {
      return a.Final - b.Final;
    });
  }

  if (sortByN === '1-10') {
    filteredData = filteredData.sort((a, b) => {
      return b.Final - a.Final;
    });
  }

  return (
    <div id="i">
      <button
        className="filterBtns"
        style={{ background: filterBy === 'all' ? '#063852' : '#011a27' }}
        onClick={() => setFilterBy('all')}
      >
        All
      </button>
      <button
        className="filterBtns"
        style={{ background: filterBy === 'pass' ? '#063852' : '#011a27' }}
        onClick={() => setFilterBy('pass')}
      >
        Passed
      </button>
      <button
        className="filterBtns"
        style={{ background: filterBy === 'fail' ? '#063852' : '#011a27' }}
        onClick={() => setFilterBy('fail')}
      >
        Failed
      </button>
      <button
        className="filterBtns"
        style={{
          background:
            sortByT === 'A-Z' || sortByT !== 'Sort (A-Z)'
              ? '#063852'
              : '#011a27',
        }}
        onClick={() => {
          if (sortByT === 'Sort (A-Z)' || sortByT === 'A-Z') {
            setSortByT('Z-A');
            setSortByN('Sort (1-10)');
          }
          if (sortByT === 'Z-A') {
            setSortByT('A-Z');
            setSortByN('Sort (1-10)');
          }
        }}
      >
        {sortByT}
      </button>
      <button
        className="filterBtns"
        style={{
          background:
            sortByN === '1-10' || sortByN !== 'Sort (1-10)'
              ? '#063852'
              : '#011a27',
        }}
        onClick={() => {
          if (sortByN === 'Sort (1-10)' || sortByN === '1-10') {
            setSortByN('10-1');
            setSortByT('Sort (A-Z)');
          }
          if (sortByN === '10-1') {
            setSortByN('1-10');
            setSortByT('Sort (A-Z)');
          }
        }}
      >
        {sortByN}
      </button>

      <input
        id="searchBox"
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={e => {
          setSearchText(e.target.value);
        }}
      />

      {/* <button>Print</button> */}
      <StudentList data={filteredData} />
    </div>
  );
}
