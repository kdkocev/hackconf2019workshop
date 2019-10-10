import React from 'react';

import Home from 'pages/Home';
import {StateProvider} from 'tools/StateProvider';


function App() {
  return (
    <StateProvider>
      <Home />
    </StateProvider>
  );
}

export default App;
