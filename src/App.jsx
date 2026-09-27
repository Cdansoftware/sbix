import { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./pages/Nav";
import SplashScreen from "./pages/SplashScreen";
import Footer from "./pages/Footer";
import ScrollToTop from "./pages/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const Competitions = lazy(() => import("./pages/Competition"));
const Overview = lazy(() => import("./pages/Overview"));
const Guidelines = lazy(() => import("./pages/Guide"));
const Registration = lazy(() => import("./pages/Registration"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      {/* Resets scroll position to top on route change */}
      <ScrollToTop />

      <Navbar />

      <Suspense fallback={<SplashScreen />}>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route
            path="/home"
            element={
              <>
                <Home />
                <Competitions />
                <Overview />
              </>
            }
          />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
};

export default App;