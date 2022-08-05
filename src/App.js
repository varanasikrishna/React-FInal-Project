import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import GradeBook from './Comp/GRADEBOOK';

function App() {
  const [res, setRes] = useState(true);
  const [bText, setBText] = useState('Student Performance');

  const main = () => {
    if (res) {
      setRes(false);
      setBText('Home');
    } else {
      setRes(true);
      setBText('Student Performance');
    }
  };

  return (
    <div className="main">
      {res && (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p className="tt">{'<CODE_WARRIORS>'}</p>
          <p className="tt">{'TEAM MEMBERS'}</p>
          <p className="cc">Bhanutej Jakkampudi</p>
          <p className="cc">Krishna Varanasi</p>
          <p className="cc">Kedarisetti Prasanth</p>
          <p className="cc">Raju Batula</p>
        </header>
      )}
      {res || (
        <div className="App-header2">
          <GradeBook />
        </div>
      )}

      <button id="studentButton" onClick={main}>
        {bText}
      </button>
    </div>
  );
}

export default App;
