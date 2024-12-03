import Footer from "./Footer";
import Header from "./Header";
import "../index.css"
import React from 'react'

interface IHeaderFooterContainerProps {
    children: React.ReactNode;
  }

export default function HeaderFooterContainer({children}:IHeaderFooterContainerProps){
    return(

        <div className="flex flex-col bg-gradient-to-b from-orange-800 to-orange-500 items-center text-center justify-between min-h-screen w-full" >
        <Header />
        {children}
        <Footer className="w-full"/>
        </div>
    )
}