import styles from "../styles/LogoMapaSmall.module.css";

const LogoMapa = () => {
  return (
    <>
      <section id="logoMapa" className={styles.LogoMapa}>
        <img id="logo" className={styles.Logo} src="/faviconcba.png" alt="" />
        <h3 className={styles.LogoTitulo}>
          MAPA <br />
          DE LA
          <br />
          POLICIA
        </h3>
      </section>
    </>
  );
};

export default LogoMapa;
