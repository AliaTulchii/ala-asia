import AnimRoutes from "./components/AnimRoutes/AnimRoutes";
import CallButtonMobile from "./components/Buttons/CallButtonMobile";
import Layout from "./components/Layout/Layout";
import "./styles/main.scss";
import "./utils/i18n";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <CallButtonMobile />
      <Router>      
      <Layout>
        <AnimRoutes />
      </Layout>
    </Router>
    </div>
    
  );
}

export default App;
