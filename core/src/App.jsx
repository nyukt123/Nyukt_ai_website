import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import "@fontsource/inter";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './components/Layout/AppLaout';

import { Home } from './pages/Home';
import { Features } from './pages/Features';
import ContactUs from './pages/ContactUs';
import { ErrorPage } from './pages/ErrorPage';
import HowitWorks from './pages/HowitWorks';
import { UseCases } from './pages/UseCases';
import Product from './pages/Product';
import { Pricing } from './pages/Pricing';
import { AboutUs } from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import Mass from './components/Product/Mass';
import ResearchandDev from './components/Product/ResearchandDev';
import DataExtraction from './components/Product/DataExtraction';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'product', element: <Product /> },
      { path: 'features', element: <Features /> },
      { path: 'howitworks', element: <HowitWorks /> },
      { path: 'UseCases', element: <UseCases /> },
      { path: 'Pricing', element: <Pricing /> },
      { path: 'about-us', element: <AboutUs /> },
      { path: 'contact-us', element: <ContactUs /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms-and-conditions', element: <TermsAndConditions /> },
      { path: 'Mass', element: <Mass /> },
      { path: 'ResearchandDev', element: <ResearchandDev /> },
      { path: 'DataExtraction', element: <DataExtraction /> },
    ],
  },
]);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  useEffect(() => {
    // 👇 Initialize AOS
    // AOS.init({
    //   duration: 1000,
    //   offset: 200, // triggers before entering viewport
    //   once: true,
    //   disableMutationObserver: true, // performance boost
    // });

    // // 👇 Initialize Locomotive Scroll
    // const scrollContainer = document.querySelector('[data-scroll-container]');
    // if (scrollContainer) {
    //   const scroll = new LocomotiveScroll({
    //     el: scrollContainer,
    //     smooth: true,
    //     lerp: 0.07, // smoothness
    //   });

    //   // 👇 Manually refresh AOS on scroll
    //   scroll.on('scroll', () => {
    //     AOS.refresh();
    //   });

    //   return () => scroll.destroy();
    // }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router}>
        <ScrollToTop />
      </RouterProvider>
    </ThemeProvider>
  );
};

export default App;
