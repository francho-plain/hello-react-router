import { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export interface PageLayoutProps {
  children?: React.ReactNode;
}

const PageLayout:FC<PageLayoutProps> = ({children}) => {
  console.log('🟢🟢 PageLayout')
  return (
    <>
      <Header />
      <main>{children ?? <Outlet />}</main>
      <Footer />
    </>
  );
}

export default PageLayout;