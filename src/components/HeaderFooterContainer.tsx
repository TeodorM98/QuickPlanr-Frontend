import Footer from "./Footer";
import Header from "./Header";
import "../index.css"
import React from 'react'

interface IHeaderFooterContainerProps {
    children: React.ReactNode;
  }

export default function HeaderFooterContainer({children}:IHeaderFooterContainerProps){
    return(

        <div className="flex flex-col items-center bg-gradient-to-r from-orange-800 to-orange-500 text-center justify-between min-h-screen w-full">
        <Header />
        {children}
        <Footer className="w-full"/>
        </div>
    )
}