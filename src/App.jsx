import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ShipmentsTable from './components/ShipmentsTable';
import ShipmentsDetails from './components/ShipmentsDetails';
import './App.css';
import Confirmation from './components/Confirmation';

function App() {
  return (
    <Provider store={store}>
      <>
        <div className='bg_color pb-32'>
          <h1 className='text-2xl md:text-6xl text-white text-center p-4 pt-20 mb-32'>Shipments</h1>

          <ShipmentsTable />
          <ShipmentsDetails />
          <Confirmation />
        </div>
      </>
    </Provider>
  );
}

export default App;
