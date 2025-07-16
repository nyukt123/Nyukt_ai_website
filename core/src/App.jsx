import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import "@fontsource/inter"; 
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLaout";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Features } from "./pages/Features";
import { Contact } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";

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
      { path: "features",element: <Features/>},
      { path: "about", element: <About /> },
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
