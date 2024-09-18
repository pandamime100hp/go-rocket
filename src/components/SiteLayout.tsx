"use client"

import Footer from "./Footer";
import Header from "./Header";
// import { ThemeProvider } from 'next-themes';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <Header />
            {children}
        <Footer />
    </>
  )
}
export default Layout