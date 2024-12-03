<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";

interface ILinkProps {
  to: string;
  children: React.ReactNode;
}

const HeaderLink: React.FC<ILinkProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-lg font-bold"
    >
      {children}
    </Link>
  );
};

export default HeaderLink;
=======
import React from 'react'
import { Link } from 'react-router-dom'

interface ILinkProps{
    to: string,
    children: React.ReactNode
}

const HeaderLink:React.FC<ILinkProps> = ({to,children}) =>{
    return(
        <Link to={to} className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-lg font-bold">{children}</Link>
    )
}

export default HeaderLink
>>>>>>> 64c6cd2d531d6be95f6e7f3b3e5d0dedd088d08f
