import React from 'react';
import UpperPage from './components/UpperPage/UpperPage';
import LowerPage from './components/LowerPage/LowerPage';
import './App.css';

type Props = {};

const App = (props: Props) => {
  return (
    <div style={{overflow: 'hidden'}}>
      <UpperPage />
      <LowerPage />
    </div>
  )
}

export default App;