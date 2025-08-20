import React from 'react';
import Services from "./Services";
import './App.css';
function App(){
  return (
  <div className="min-h-screen bg-gray-100">
  <header className="bg-green-700 text-white py-4 px-8 flex justify-between items-center">
    <h1 className="text-2xl font-bold">Shakir Ahmed</h1>
  </header>
  <Services />
  </div>
  )
};
export default App;
