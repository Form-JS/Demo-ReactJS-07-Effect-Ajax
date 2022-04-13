import logo from './logo.svg';
import './App.css';
import CounterEffect from './components/counter-effect/counter-effect';
import { useState } from 'react';
import MainNationalize from './components/nationalize/main-nationalize';

function App() {

  const [displayCounter, setDisplayCounter] = useState(false);

  return (
    <div className="App">
      <h1>Demo 07 - useEffect &amp; Ajax</h1>
      <hr />
      <button onClick={() => setDisplayCounter(!displayCounter)}>Toggle</button>
      {displayCounter && (
        <CounterEffect />
      )}
      <hr />
      <MainNationalize />
    </div>
  );
}

export default App;
