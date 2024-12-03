import React from "react"
import { cn } from "../utils/utils"
import FooterLink from "./FooterLink"

interface IFooterProps{
    className: string
}

const Footer:React.FC<IFooterProps> =({className}) =>{
    return(
        <footer className={cn(className, "bg-gray-800")}>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/">About</FooterLink>
            <FooterLink to="/">Services</FooterLink>
            <FooterLink to="/">Contact</FooterLink>
            <FooterLink to="/">Terms of service</FooterLink>
            <FooterLink to="/">Privacy policy</FooterLink>          
            <FooterLink to="/">Payment policy</FooterLink>
        </footer>
    )
}

export default Footer