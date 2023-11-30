import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import RestrauntMenu from "./components/RestrauntMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Foooter from "./components/Foooter";
import reportWebVitals from './reportWebVitals';
import "./index.css";
import { Provider } from "react-redux";
import appStore from "./utils/Redux/appStore";
import Cart from "./components/Cart";
import FAQ from "./components/FAQ";


export const AppContext = createContext()

const EatAndBite = () => {
  const [latitude, setLatitude] = useState(26.8310467);
  const [longitude, setLongitude] = useState(80.9243877);

  return (
    <Provider store={appStore} >
      <AppContext.Provider value={{ latitude, setLatitude, longitude, setLongitude }} >
        <Header />
        <Outlet />
        <Foooter />
      </AppContext.Provider>
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <EatAndBite />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restraunt/:resId",
        element: <RestrauntMenu />,
      },
    ],
    errorElement: <Error />,
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
