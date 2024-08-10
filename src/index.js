import React,{ Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import './App.css';
import State from './Components/State.js';
// import { motion } from 'framer-motion'; 
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const MainApp = lazy(() => import('./App.js'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <State>
    <BrowserRouter>
    <Suspense fallback={ <div className="center" id='centerloading' style={{backgroundColor:"rgb(12, 12, 150)",}}>
    <div className="ring"> </div>
    <span id='spanloading'>loading...</span>
</div>}>
    <MainApp />
      </Suspense>
   
    </BrowserRouter>
    </State>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
