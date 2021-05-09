import React from 'react';
import { Provider } from 'react-redux';
import Router from 'routing/router';
import store from 'store';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* Modal */}
        {/* Progress bar */}
      </Router>
    </Provider>
  );
}

export default App;
