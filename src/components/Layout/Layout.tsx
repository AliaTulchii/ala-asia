import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const isLightText = ["/loads", "/contact", "/policy"].includes(pathname);
  const headerTextColor = isLightText ? "light" : "dark";
  return (
    <div>
      <Header themeColor={headerTextColor} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
