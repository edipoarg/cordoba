import { useState } from "react";
import styles from "./Denuncia.module.css";
import Airtable from "airtable";
import constants from "../../../services/constants";


// Initialize Airtable base
const base = new Airtable({ apiKey: constants.apiKey }).base(constants.baseId);

type RequiredFields = {
  fecha: string;
  hora: string;
  lugar: string;
  descripcion: string;
  nombre: string;
  telefono: string;
  email: string;
};

const getEmptyRequiredFieldsError = (
  requiredFields: RequiredFields,
): string | null => {
  const { fecha, hora, lugar, descripcion, nombre, telefono, email } =
    requiredFields;
  if (
    !fecha ||
    !hora ||
    !lugar || 
    !descripcion ||
    !nombre ||
    !telefono ||
    !email
  ) {
    return `Por favor completa los campos obligatorios: ${Object.entries(
      requiredFields,
    )
      .filter(([_key, value]) => value === "")
      .map(([key]) => key)
      .join(", ")}`;
  }
  return null;
};

const Denuncia = () => {
 
  return ( 
    <>
      <div className={`${styles.spinnerContainer} ${styles.active}`}></div>
      <section className={styles.denunciaContainer}>
        <section className={styles.denunciaTitles}>
          {/*<h2>Quiero Denunciar</h2>
          <h4>Un hecho de violencia policial</h4>*/}
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfRmoyvGCzTN_cBL9No3HiT4YOiTN23BdfCl8cVNzREz-dKAw/viewform?embedded=true" width="640" height="4500" >Cargando…</iframe>          
       
        </section>
      </section>
    </>
  );
};

export default Denuncia;
