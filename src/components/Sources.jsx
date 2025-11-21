import { Source, Layer } from "react-map-gl/maplibre";
import PropTypes from "prop-types";

export const DepsSource = ({ data }) => (
  <Source id="departamentos-source" type="geojson" data={data}>
    <Layer
      id="departamentos-layer"
      type="fill" // Capa de relleno para representar polígonos
      paint={{
        "fill-color": "#232128",
        "fill-opacity": 0.3,
        "fill-outline-color": "#9423ed",
      }}
    />
  </Source>
);

export const  CordobaSource = ({ data }) => (
  <Source id="cordoba-source" type="geojson" data={data}>
    <Layer
      id="cordoba-layer"
      type="fill" // Capa de relleno para representar polígonos
      paint={{
        "fill-color": "#232128",
        "fill-opacity": 0.3,
        "fill-outline-color": "#9423ed",
      }}
    />
  </Source>
);

export const  DistritosCordobaSource = ({ data }) => (
  <Source id="distritosCordoba-source" type="geojson" data={data}>
    <Layer
      id="distritosCordoba-layer"
      type="fill" // Capa de relleno para representar polígonos
      paint={{
        "fill-color": "#232128",
        "fill-opacity": 0.3,
        "fill-outline-color": "#9423ed",
      }}
    />
  </Source>
);

export const  LimitesComisariasSource = ({ data }) => (
  <Source id="limitesComisarias-source" type="geojson" data={data}>
    <Layer
      id="limitesComisarias-layer"
      type="fill" // Capa de relleno para representar polígonos
      paint={{
        "fill-color": "#232128",
        "fill-opacity": 0.3,
        "fill-outline-color": "#9423ed",
      }}
    />
  </Source>
);


export const  BarriosCordobaSource = ({ data }) => (
  <Source id="barriosCordoba-source" type="geojson" data={data}>
    <Layer
      id="barriosCordoba-layer"
      type="fill" // Capa de relleno para representar polígonos
      paint={{
        "fill-color": "#232128",
        "fill-opacity": 0.5,
        "fill-outline-color": "#9423ed",
      }}
    />
  </Source>
);


export const BarriosCabaSource = ({ data }) => (
  <Source id="barriosCaba-source" type="geojson" data={data}>
    <Layer
      id="barriosCaba-layer"
      type="fill" // Capa de relleno para representar polígonos
      paint={{
        "fill-color": "#232128",
        "fill-opacity": 0.5,
        "fill-outline-color": "#2cb34c",
      }}
    />
  </Source>
);

export const CabaSource = ({ data }) => (
  <Source id="caba-source" type="geojson" data={data}>
    <Layer
      id="caba-layer"
      type="fill" // Capa de relleno para representar polígonos
      paint={{
        "fill-color": "rgba(255, 255, 255, 0)",
        "fill-opacity": 0.5,
        "fill-outline-color": "#9423ed",
      }}
    />
  </Source>
);
export const LaPlataSource = ({ data }) => (
  <Source id="laplata-source" type="geojson" data={data}>
    <Layer
      id="laplata-layer" // Cambiado a "laplata-layer" para que sea único
      type="fill"
      paint={{
        "fill-color": "rgba(255, 255, 255, 0)",
        "fill-opacity": 0.8,
        "fill-outline-color": "#9423ed",
      }}
    />
  </Source>
);

export const DepartamentosLaPlataSource = ({ data }) => (
  <Source id="departamentosLaPlata-source" type="geojson" data={data}>
    <Layer
      id="departamentosLaPlata-layer" // Cambiado a "departamentosLaPlata-layer" para que sea único
      type="fill"
      paint={{
        "fill-color": "rgba(255, 255, 255, 0)",
        "fill-opacity": 1,
        "fill-outline-color": "#2a8842",
      }}
    />
  </Source>
);

const SourcePropTypes = {
  data: PropTypes.any,
};

DepsSource.propTypes = SourcePropTypes;
BarriosCabaSource.propTypes = SourcePropTypes;
CabaSource.propTypes = SourcePropTypes;
CordobaSource.propTypes = SourcePropTypes;
LaPlataSource.propTypes = SourcePropTypes;
DepartamentosLaPlataSource.propTypes = SourcePropTypes;
