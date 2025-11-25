/* eslint-disable react/prop-types */
import styles from "./Filtros.module.css";
import Icons from "../iconos/Icons";

/** @typedef {"reportes" | "dependencias" | "gatillo" | "all"} Filtro */

/** @type {({currentFilter, handleFilterChange } : { currentFilter: Filtro, handleFilterChange: (f: Filtro) => void; }) => react.JSX.Element} */
export default function Filtros({ currentFilter, handleFilterChange }) {
  return (
    <div className={styles.filtroTipo}>
      <h3 className={styles.title}>Filtros</h3>

      <div
        className={`${styles.tipo1Ref} ${currentFilter === "dependencias" ? styles.selected : ""}`}
        onClick={() => handleFilterChange("dependencias")}
      >
        <Icons icon="mapa" />
        <h4 className={styles.tipoClass}>Comisarías </h4>
      </div>
      <div
        className={`${styles.tipo3Ref} ${currentFilter === "gatillo" ? styles.selected : ""}`}
        onClick={() => handleFilterChange("gatillo")}
      >
        <Icons icon="gatillo" />
        <h4 className={styles.tipoClass}>Intervenciones policiales letales</h4>
      </div>
    </div>
  );
}
