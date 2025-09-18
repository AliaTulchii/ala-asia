import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../../pages/Home/Home";
// import TransportType from "../../pages/TransportType/TransportType";
// import Loads from "../../pages/Loads/Loads";
// import About from "../../pages/About/About";
// import Contact from "../../pages/Contact/Contact";
// import NotFound from "../../pages/NotFound/NotFound";
// import PrivacyPolicy from "../../pages/PrivatePolicy/PrivacyPolicy";
import Stairs from "../Stairs/Stairs";

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Stairs>
              <Home />
            </Stairs>
          }
        />
        {/* <Route
          path="/transport"
          element={
            <Stairs>
              <TransportType />
            </Stairs>
          }
        /> */}
        {/* <Route
          path="/loads"
          element={
            <Stairs>
              <Loads />
            </Stairs>
          }
        /> */}
        {/* <Route
          path="/about"
          element={
            <Stairs>
              <About />
            </Stairs>
          }
        /> */}
        {/* <Route
          path="/contact"
          element={
            <Stairs>
              <Contact />
            </Stairs>
          }
        /> */}
        {/* <Route
          path="/policy"
          element={
            <Stairs>
              <PrivacyPolicy />
            </Stairs>
          }
        /> */}
        {/* <Route
          path="*"
          element={
            <Stairs>
              <NotFound />
            </Stairs>
          }
        /> */}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
