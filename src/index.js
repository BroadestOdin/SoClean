import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import './App.css';
import Main from './main'
import EstimationTools from "./estimation_tools"
import Header from "./header";
import NotFound from "./404"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <NotFound/>,
  },
  {
    path: "/estimation",
    element: <EstimationTools/>,
    errorElement: <NotFound/>,
  },
  {
    path: "/404",
    element: <NotFound/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
