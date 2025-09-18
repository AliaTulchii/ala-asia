import AnimRoutes from "./components/AnimRoutes/AnimRoutes";
import Layout from "./components/Layout/Layout";
import "./styles/main.scss";
import "./utils/i18n";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <AnimRoutes />
      </Layout>
    </Router>
  );
}

export default App;
