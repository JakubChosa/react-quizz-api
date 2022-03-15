import React from 'react'
import Info from './components/Info'
import Quizz from './components/Quizz'
import {ContextProvider} from './Context.js'

function App() {
  return (
    <div className="container">
      <Info />
      <ContextProvider>
        <Quizz />
      </ContextProvider>
    </div>
  );
}

export default App;
