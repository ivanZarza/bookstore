import styles from './Menu.module.css'

function Menu() {
  return (
    <>
      <nav className= {styles.menu} >
        <a className={styles.a} href="">Home</a>
        <a href="" className={styles.a}>Libros</a>
        <a href="" className={styles.a}>Log In</a>
      </nav>
    </>
  );
}

export default Menu;