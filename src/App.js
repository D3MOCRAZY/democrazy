import React from 'react';
import './App.css';

import Headercomponent from './components/header.js'
import Maincomponent from './components/main.js'
import Footercomponent from './components/footer.js'

function App() {
  return (
    <div className="App">
      <Headercomponent>
      </Headercomponent>

        <Maincomponent>
        </Maincomponent>

      <Footercomponent>
      </Footercomponent>
    </div>
  );
}

export default App;
