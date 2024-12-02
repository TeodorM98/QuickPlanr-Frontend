import React from "react";
import { Link } from "react-router-dom";

interface ILinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<ILinkProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-xs font-medium"
    >
      {children}
    </Link>
  );
};

export default FooterLink;