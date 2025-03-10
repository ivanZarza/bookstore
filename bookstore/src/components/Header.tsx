import Logo from "./Logo";
import Menu from "./Menu";
import styles from "./Header.module.css"



function Header() {
  return (
    <>
      <header className= {styles.header}>
        <Logo />

        <Menu />
      </header>
    </>
  );
}

export default Header;