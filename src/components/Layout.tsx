import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-screen">
    <Sidebar />
    <div className="flex-1 ml-[200px]">
      <TopBar />
      <main>{children}</main>
      <Footer />
    </div>
  </div>
);

export default Layout;
