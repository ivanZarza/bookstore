import styles from "./Footer.module.css"

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a href="" className={styles.a}>Facebook</a>
        <a href="" className={styles.a}>Instagram</a>
        <a href="" className={styles.a}>Twiter</a>
      </footer>
    </>
  );
}

export default Footer;