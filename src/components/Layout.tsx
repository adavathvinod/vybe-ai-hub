import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background overflow-x-clip">
    <Sidebar />
    <div className="min-h-screen w-full lg:ml-[200px] lg:w-[calc(100%-200px)] overflow-x-clip">
      <TopBar />
      <main className="w-full overflow-x-clip">{children}</main>
      <Footer />
    </div>
  </div>
);

export default Layout;
