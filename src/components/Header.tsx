import HeaderLink from "./HeaderLink";

export default function Header() {
  return (
    <nav className="flex justify-evenly items-start w-full border-b-4 border-orange-800">
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/">About</HeaderLink>
      <HeaderLink to="/">Services</HeaderLink>
      <HeaderLink to="/">Contact</HeaderLink>
    </nav>
  );
}
