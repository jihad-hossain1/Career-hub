import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './components/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppliedJob from './components/AppliedJob/AppliedJob';
import Statistics from './components/Statistic/Statistics';
import Blog from './components/Blog/Blog';
import customData from './Custom/CustomLoader';
import JobDetails from './components/JobDetails/JobDetails';
import Error404 from './components/Error404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    loader: customData,
    errorElement: <Error404></Error404>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <AppliedJob></AppliedJob>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/jobdetails/:jobId',
        element: <JobDetails></JobDetails>,
        // loader: customData
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
