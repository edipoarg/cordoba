import { useState } from "react";
import styles from "./Denuncia.module.css";


const Denuncia = () => {
 

  return ( 
    <>
      <div className={`${styles.spinnerContainer} ${styles.active}`}></div>
      <section className={styles.denunciaContainer}>
        <section className={styles.denunciaTitles}>

        <iframe
  src="https://docs.google.com/forms/d/e/1FAIpQLSfRmoyvGCzTN_cBL9No3HiT4YOiTN23BdfCl8cVNzREz-dKAw/viewform?embedded=true"
  width="640"
  height="1800"
>
  Cargando…
</iframe>

       
        </section>
      </section>
    </>
  );
};

export default Denuncia;
