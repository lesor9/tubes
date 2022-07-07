import React from 'react';
import './App.css';
import AddTubeSize from './containers/AddTubeSize';
import TubeSizes from './containers/TubeSizes';
import TubeContextProvider from './contexts/TubeContextProvider';


function App() {
  return (
    <TubeContextProvider>
      <div className="App">
        <TubeSizes />

        <AddTubeSize />
      </div>
    </TubeContextProvider>
  );
}

export default App;
