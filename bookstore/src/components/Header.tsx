import Logo from "./Logo";
import Menu from "./Menu";


function Header() {
  return (
    <>
      <header className="w-full flex justify-between bg-teal-300  items-end">
        <Logo />
        <Menu />
      </header>
    </>
  );
}

export default Header;