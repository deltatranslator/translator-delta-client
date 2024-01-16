import { Outlet } from "react-router-dom";
import Footer from "../../Footer";

const MainLayout = () => {
  return (
    <div>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
