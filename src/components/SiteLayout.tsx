"use client"

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
            {children}
        <Footer />
    </>
  )
}

export default Layout
