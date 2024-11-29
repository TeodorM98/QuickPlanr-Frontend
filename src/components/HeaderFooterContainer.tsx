import Footer from "./Footer";
import Header from "./Header";
import "../index.css"
import React from 'react'

interface IHeaderFooterContainerProps {
    children: React.ReactNode;
  }

export default function HeaderFooterContainer({children}:IHeaderFooterContainerProps){
    return(

        <div className="flex flex-col items-center text-center justify-between min-h-screen w-full" style={{backgroundImage:`url(https://th.bing.com/th/id/R.afe00282ba90581bdf8568575d3517aa?rik=mhEo8B%2beAZJofQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f1%2f0%2fe%2f686169.jpg&ehk=o3FnbIL4x%2bSI%2bRVKpjbMQIif8kIXTfZ%2fUUwD44k6YmI%3d&risl=&pid=ImgRaw&r=0)`}}>
        <Header />
        {children}
        <Footer className="w-full"/>
        </div>
    )
}