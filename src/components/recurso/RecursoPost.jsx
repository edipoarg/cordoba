/*
import styles from "./RecursoPost.module.css";

const RecursoPost = ({
  title,
  subtitle,
  Dirección,
  WhatsApp,
  Teléfono,
  Email,
  content,
  link,
  id,
}) => {
  return (
    <div className={styles.post} id={id}>
      <div className={styles.titleContainer}>
        <h4 className={styles.postTitle}>{title}</h4>
        {subtitle && <h5 className={styles.subtitle}>{subtitle}</h5>}
      </div>
      <div className={styles.submenu}>
        {Dirección && (
          <div className={styles.detail}>
            <h3 className={styles.detailType}>Dirección:</h3> {Dirección}
          </div>
        )}
        {Teléfono && (
          <div className={styles.detail}>
            <h3 className={styles.detailType}>Teléfono:</h3> {Teléfono}
          </div>
        )}
        {WhatsApp && (
          <div className={styles.detail}>
            <h3 className={styles.detailType}>WhatsApp:</h3> {WhatsApp}
          </div>
        )}
        {Email && (
          <div className={styles.detail}>
            <h3 className={styles.detailType}>Email:</h3> {Email}
          </div>
        )}
        {content && <p className={styles.content}>{content}</p>}
        {link && (
          <a
            className={styles.link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        )}
      </div>
    </div>
  );
};

export default RecursoPost; 

*/

/* eslint-disable react/prop-types */
import React from "react";
import styles from "./RecursoPost.module.css";

/**
 * Componente que muestra cada recurso individual (post)
 * Soporta saltos de línea (\n) y campos opcionales (dirección, teléfono, etc.)
 */
const RecursoPost = ({
  title,
  subtitle,
  Dirección,
  WhatsApp,
  Teléfono,
  Email,
  content,
  link,
  id,
}) => {
  // 🔹 Función auxiliar: convierte \n en saltos de línea reales (<br />)
  function renderWithBreaks(text) {
    // Si ya es un array (como ahora), renderizá cada párrafo
    if (Array.isArray(text)) {
      return text.map((t, i) => <p key={i}>{t}</p>);
    }

    // Si es un string, dividí por saltos de línea
    if (typeof text === "string") {
      return text.split("\n").map((line, i) => <p key={i}>{line}</p>);
    }

    // Si no es nada válido
    return null;
  }


  return (
    <div className={styles.post} id={id}>
      <div className={styles.titleContainer}>
        <h4 className={styles.postTitle}>{title}</h4>
        {subtitle && <h5 className={styles.subtitle}>{subtitle}</h5>}
      </div>

      <div className={styles.submenu}>
        {Dirección && (
          <div className={styles.detail}>
            <h3 className={styles.detailType}>Dirección:</h3>
            <span>{Dirección}</span>
          </div>
        )}
        {Teléfono && (
          <div className={styles.detail}>
            <h3 className={styles.detailType}>Teléfono:</h3>
            <span>{Teléfono}</span>
          </div>
        )}
        {WhatsApp && (
          <div className={styles.detail}>
            <h3 className={styles.detailType}>WhatsApp:</h3>
            <span>{WhatsApp}</span>
          </div>
        )}
        {Email && (
          <div className={styles.detail}>
            <h3 className={styles.detailType}>Email:</h3>
            <span>{Email}</span>
          </div>
        )}

        {content && (
          <p className={styles.content}>{renderWithBreaks(content)}</p>
        )}

        {link && (
          <a
            className={styles.link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        )}
      </div>
    </div>
  );
};

export default RecursoPost;
