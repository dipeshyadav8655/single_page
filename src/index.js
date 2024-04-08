import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Screens/Home/Home';
import ServicesPage from './Screens/ServicesPage/ServicesPage';
import AimlScreen from './Screens/ServicesScreens/AimlScreen/AimlScreen';
import DataEngi from './Screens/ServicesScreens/DataEngineering/DataEngi';
import DataAnalytics from './Screens/ServicesScreens/DataAnalytics/DataAnalytics';
import BlockChain from './Screens/ServicesScreens/BlockChain/BlockChain';
import Qa from './Screens/ServicesScreens/Qa/Qa';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children:[
      {
        path: '',
        element: <Home />
      },
      {
        path: 'Home',
        element: <Home />
      },
      {
        path: 'Blockchain',
        element: <ServicesPage />
      },
      {
        path: 'Aiml',
        element: <AimlScreen />
      },
      {
        path: 'DataEngin',
        element: <DataEngi />
      },
      {
        path: 'DataAnalytics&BI',
        element: <DataAnalytics />
      },
      {
        path: 'CloudTrasformation',
        element: <BlockChain />
      },
      {
        path: 'Qa',
        element: <Qa />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
