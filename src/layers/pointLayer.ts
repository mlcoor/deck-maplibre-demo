import { GeoJsonLayer, GeoJsonLayerProps } from "@deck.gl/layers/typed";
import { MapboxOverlay, MapboxOverlayProps } from "@deck.gl/mapbox/typed";

export type PointOverlayProps = MapboxOverlayProps

// geoJsonLayer Prop
export const defaultGeoJsonProp: GeoJsonLayerProps = {
    id: 'geojson-point-layer',
    data: 'city.geojson',
    pickable: true,
    pointType: 'icon+circle',
    getPointRadius: 100000,
    getFillColor: [255, 140, 0, 0.5],
    pointRadiusUnits: 'meters',
    getIcon: () => ({
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/512px-Flat_tick_icon.svg.png',
        width: 512,
        height: 512,
    }),
    getIconSize: 64000,
    getIconColor: [0, 55, 55],
    iconSizeUnits: 'meters',
}

export const defaultPointOverlayerProps: PointOverlayProps = {
    id: 'deckgl-overlay',
    // interleaved: true,
    layers: [
        new GeoJsonLayer(defaultGeoJsonProp)
    ],
}

export class PointOverLay extends MapboxOverlay {
    constructor(props: PointOverlayProps) {
        super(props);
    }
}