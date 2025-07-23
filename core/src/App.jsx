import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import "@fontsource/inter"; 
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
// carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLaout";

// pages
import { Home } from "./pages/Home";
// import { About } from "./pages/About";
import { Features } from "./pages/Features";
import { Contact } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";
import HowitWorks  from "./pages/HowitWorks";
import { UseCases } from "./pages/UseCases";
import Product from "./pages/Product";
import {Pricing} from "./pages/Pricing";
// components

// 👇 Import your theme and MUI providers
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "product",element: <Product/>},
      { path: "features",element: <Features/>},
      { path: "howitworks", element: <HowitWorks/> },
      { path: "UseCases",element: <UseCases/>},
      { path: "Pricing",element: <Pricing/>},
      { path: "contact", element: <Contact /> },
    ],
  },
]);

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Applies global resets and font styling */}
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
