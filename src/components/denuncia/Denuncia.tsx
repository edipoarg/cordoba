import { useState } from "react";
import styles from "./Denuncia.module.css";
import Airtable from "airtable";
import constants from "../../../services/constants";
import {
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "../../../services/firebase";

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
  const [isSending, setIsSending] = useState<boolean>(false);
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [lugar, setLugar] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [agresor, setAgresor] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [patente, setPatente] = useState("");
  const [archivos, setArchivos] = useState<null | FileList>(null);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [visibilizar, setVisibilizar] = useState(false);
  const [denunciarLegalmente, setDenunciarLegalmente] = useState(false);
  const [aceptoTerminos, setAceptoTerminos] = useState(false);

  const handleSubmit = async () => {
    setIsSending(true);
    await submit();
    setIsSending(false);
  };

  const submit = async () => {
    const emptyFieldError = getEmptyRequiredFieldsError({
      descripcion,
      email,
      fecha,
      hora,
      lugar,
      nombre,
      telefono,
    });

    if (emptyFieldError) {
      alert(emptyFieldError);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor ingresa un correo electrónico válido.");
      return;
    }

    if (!aceptoTerminos) {
      alert("Por favor acepta los términos y condiciones.");
      return;
    }

    try {
      const fileUrls: string[] = [];
      if (archivos) {
        for (let i = 0; i < archivos.length; i++) {
          const archivo = archivos[i];
          if (archivo) {
            const archivoRef = ref(storage, `archivos/${archivo.name}`);
            const snapshot = await uploadBytes(archivoRef, archivo);
            const fileUrl = await getDownloadURL(snapshot.ref);
            fileUrls.push(fileUrl);
          }
        }
      }
      /* Objeto con la data para guardar en airtable */
      const recordData = {
        Fecha: fecha,
        Hora: hora,
        Lugar: lugar,
        Descripcion: descripcion,
        Agresor: agresor,
        Identificación: identificacion,
        Patente: patente,
        // commas are legal parts of URLs, so separating URLs with commas and spaces makes sense
        Archivos: fileUrls.join(" , "),
        Nombre: nombre,
        Teléfono: telefono,
        Email: email,
        Visibilizar: visibilizar,
        Denunciar_legalmente: denunciarLegalmente,
      };

      const response = await base("tblLbB2PWSaWbhWG0").create(recordData);
      console.log("Registro creado con éxito:", response);
      alert("Denuncia enviada con éxito");
      setFecha("");
      setHora("");
      setLugar("");
      setDescripcion("");
      setAgresor("");
      setIdentificacion("");
      setPatente("");
      setArchivos(null);
      setNombre("");
      setTelefono("");
      setEmail("");
      setVisibilizar(false);
      setDenunciarLegalmente(false);
      setAceptoTerminos(false);
    } catch (error) {
      console.error("Error al crear el registro:", error);
      alert(
        "Hubo un error al enviar la denuncia. Por favor intenta nuevamente más tarde.",
      );
    }

  };

  return ( 
    <>
      <div className={`${styles.spinnerContainer} ${styles.active}`}></div>
      <section className={styles.denunciaContainer}>
        <section className={styles.denunciaTitles}>

        <iframe
  src="https://docs.google.com/forms/d/e/1FAIpQLSfRmoyvGCzTN_cBL9No3HiT4YOiTN23BdfCl8cVNzREz-dKAw/viewform?embedded=true"
  width="640"
  height="4500"
>
  Cargando…
</iframe>

       
        </section>
      </section>
    </>
  );
};

export default Denuncia;
