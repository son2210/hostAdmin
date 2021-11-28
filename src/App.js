import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './routes/Routes';
import store from './redux/store';
import { persistor } from './redux/store';
import 'react-quill/dist/quill.snow.css'; // ES6

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Routes />
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
