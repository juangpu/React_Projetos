import React from 'react';
import './App.css';
// import Feed from './components/Feed'
// import Anuncio from './components/Anuncio'

import Contador from './components/Contador';

function App() {
  return (
    <div className="App">
      {/* <Anuncio>
        Sou o anuncio 1.
      </Anuncio>
      <Feed />
      <Anuncio>
        Sou o anuncio 2.
      </Anuncio> */}
      <Contador />
    </div>
  );
}

export default App;
