import React, { useState, createContext } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Shipment from './component/Shipment/Shipment';

export const CatagoryContext = createContext();

function App() {

  const [category, setCategory] = useState('Laptop');

  return (
    <CatagoryContext.Provider value={[category, setCategory]}>

      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </CatagoryContext.Provider>
  );
}

export default App;
