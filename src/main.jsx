import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Layout from "./Layout";
import About from "./About";
import App from "./App";
import Debut from "./albums/Debut";
import Fearless from "./albums/Fearless";
import Speaknow from "./albums/Speaknow";
import Red from "./albums/Red";
import NineteenEightyNine from "./albums/NineteenEightyNine";
import Reputation from "./albums/Reputation";
import Lover from "./albums/Lover";
import Folklore from "./albums/Folklore";
import Evermore from "./albums/Evermore";
import Midnights from "./albums/Midnights";

const router = createBrowserRouter(
[
    {
      path: "/",
      element: <Layout><App/></Layout>
    },
    {
      path: "/about",
      element: <Layout><About /></Layout>
    },
    {
      path: "/album-debut",
      element: <Layout><Debut /></Layout>
    },
    {
      path: "/album-fearless",
      element: <Layout><Fearless /></Layout>
    },
    {
      path: "/album-speaknow",
      element: <Layout><Speaknow /></Layout>
    },
    {
      path: "/album-red",
      element: <Layout><Red /></Layout>
    },
    {
      path: "/album-1989",
      element: <Layout><NineteenEightyNine /></Layout>
    },
    {
      path: "/album-reputation",
      element: <Layout><Reputation /></Layout>
    },
    {
      path: "/album-lover",
      element: <Layout><Lover /></Layout>
    },
    {
      path: "/album-folklore",
      element: <Layout><Folklore /></Layout>
    },
    {
      path: "/album-evermore",
      element: <Layout><Evermore /></Layout>
    },
    {
      path: "/album-midnights",
      element: <Layout><Midnights /></Layout>
    }
]
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import Layout from './Layout.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* <Layout><App /></Layout> */}
//     <App />
//   </React.StrictMode>,
// )
