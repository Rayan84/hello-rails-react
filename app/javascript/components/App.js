import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greetings from './Greetings';
import configureStore from '../redux/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Greetings />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </header>
    </div>
  );
}

export default App;