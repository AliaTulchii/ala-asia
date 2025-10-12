import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const isLight = ["/about", "/contact", "/policy"].includes(pathname);
  const headerColor = isLight ? "light" : "dark";

  return (
    <div>
      <Header themeColor={headerColor} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
