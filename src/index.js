import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './component/Login';
import SignUp from './component/Signup';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/'element={<App/>}>
    </Route>
    <Route path='/login'element={<Login/>}>
    </Route>
    <Route path='/signup'element={<SignUp/>}>
    </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


