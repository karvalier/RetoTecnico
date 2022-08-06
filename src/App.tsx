import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "./state/store";
import MainPage from './pages/mainPage/MainPage';
import { ToastContainer } from 'react-toastify';
import 'rsuite/dist/styles/rsuite-default.css';
import 'react-toastify/dist/ReactToastify.css';
import './scss/App.scss';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            {/* <Route exact path="/login"  component={LoginPage}/> */}
            <Route path="/" component={MainPage} />
          </Switch>
        </Router>
      </Provider>
      <ToastContainer
        position="top-right"
        autoClose={6000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
