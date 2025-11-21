import { useContext, useState } from "react";
import MapGL, { NavigationControl } from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Link } from "react-router-dom";
import LogoMapa from "../LogoMapa";
// eslint-disable-next-line no-redeclare
import Screen from "../Screen";
import styles from "./Mapa.module.css";

// GEOJSON IMPORTS
import {
  cordoba,
  barriosCordoba,
  distritosCordoba,
  limitesComisarias
} from "./geojson-data/index";

import {
  CordobaSource,
  BarriosCordobaSource,
  DistritosCordobaSource,
  LimitesComisariasSource,
} from "../Sources";

// MARKERS IMPORTS
import DependenciasMarkers from "../dependenciasMarkers/DependenciasMarkers";
import GatilloMarkers from "../gatilloMarkers/GatilloMarkers";

//Filtros Import
import Filtros from "../filtros/Filtros";
import { Caso } from "../../models/casos";
import {
  CasosDependenciaContext,
  CasosGatilloContext,
} from "../../routes/Root";

type Filtro = "dependencias" | "gatillo" | "all";

const Mapa = () => {
  const [currentFilter, setCurrentFilter] = useState<Filtro>("all");

  const handleFilterChange = (newFilter: Filtro): void => {
    if (newFilter === currentFilter) setCurrentFilter("all");
    else setCurrentFilter(newFilter);
  };

  // PROPERTIES OF THE MAP
  const mapProps = {
    initialViewState: {
      longitude: -64.1888,
      latitude: -31.4201, 
      zoom: 10,
      minZoom: 1,
      maxZoom: 25,
       maxBounds: [
      [-67.0, -34.6],   // suroeste (más ancho y más abajo)
      [-61.7, -28.7]    // noreste (más ancho y más arriba)
    ],
    },

    style: {
      width: "100vw",
      height: "100vh",
    },

    //New Style (Full map data)
    mapStyle: "https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json",
  };

  //visibilidad Filtro
  //TODO: Remove this
  const [filtrosVisible, setFiltrosVisible] = useState(true);
  const toggleFiltrosVisibility = () => {
    setFiltrosVisible(!filtrosVisible);
  };
  const [isCloseButtonClicked, setIsCloseButtonClicked] = useState(false);
  const handleClickCloseButton = () => {
    // Toggle the state when the button is clicked
    setIsCloseButtonClicked(!isCloseButtonClicked);
  };

  const [selectedMarkerId, setSelectedMarkerId] = useState<string | null>(null);

  // SCREEN INFO
  const [selectedCase, setSelectedCase] = useState<Caso | null>(null);

  const casosDependencia = useContext(CasosDependenciaContext);
  const casosGatillo = useContext(CasosGatilloContext);

  if (
    casosDependencia === "loading" ||
    casosGatillo == "loading"
  )
    return <p>Cargando...</p>;

  if (casosDependencia === null)
    return <p>Ocurrió un error al cargar los datos de dependencias</p>;

  if (casosGatillo === null)
    return <p>Ocurrió un error al cargar los casos de gatillo fácil</p>;

  return (
    <>
      <section id="MapaDev" className={styles.MapaDev}>
        <Link to="/denuncia">
          <div className={styles.emergButton}>
            <h4 className={styles.emerg}>DENUNCIÁ</h4>
          </div>
        </Link>

        <Filtros
          currentFilter={currentFilter}
          handleFilterChange={handleFilterChange}
        />

        <div className={styles.botonFiltrosMain}>
          {/* FIXME: Why is this not a button? */}
          {/* Render different button content based on the state */}
          <a
            aria-label="Hide"
            onClick={(e) => {
              e.preventDefault();
              handleClickCloseButton();
              toggleFiltrosVisibility();
            }}
            href="#"
            className={`${styles.closeButton} ${styles["simple-button"]} ${isCloseButtonClicked ? styles["transformed-button"] : ""}`}
          >
            {isCloseButtonClicked ? (
              <div>
                <h5 className={styles.botonFiltrosMap}>FILTROS</h5>
              </div>
            ) : (
              <>X</>
            )}
          </a>
        </div>
        <Screen caso={selectedCase} />

        <MapGL id="mapa" mapLib={maplibregl} {...mapProps}>
          <NavigationControl position="top-right" />
          <CordobaSource data={cordoba}/>
          <BarriosCordobaSource data={barriosCordoba}/>
          <DistritosCordobaSource data={distritosCordoba}/>
          <LimitesComisariasSource data={limitesComisarias}/>

          {/* Renderiza los marcadores de las dependencias */}
          {(currentFilter === "all" || currentFilter === "dependencias") && (
            <DependenciasMarkers
              dependencias={casosDependencia}
              setSelectedCase={setSelectedCase}
              setMarker={setSelectedMarkerId}
              selected={selectedMarkerId}
            />
          )}

          {(currentFilter === "all" || currentFilter === "gatillo") && (
            <GatilloMarkers
              gatillos={casosGatillo}
              setSelectedCase={setSelectedCase}
              setMarker={setSelectedMarkerId}
              selected={selectedMarkerId}
            />
          )}

     
        </MapGL>
        <LogoMapa />
      </section>
    </>
  );
};

export default Mapa;
