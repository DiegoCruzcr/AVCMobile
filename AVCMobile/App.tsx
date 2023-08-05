import React from 'react';
import Quiz from './components/Quiz';
import Etapa1 from './const';

const App = () => {
  return (
    <Quiz description={Etapa1.description}  hint={Etapa1.hint}/>
  );
};

export default App;