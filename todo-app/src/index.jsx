import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage';

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { grey } from '@mui/material/colors';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const myTheme = createTheme({
  status: {
    danger: '#c2c2c2',
  },
  palette: {
    primary: {
      main: grey[300]
    }
  }
});


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/safwan",
    element: <AboutPage />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
