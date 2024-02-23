import { IControl, Map } from "maplibre-gl";
import "./zoomLevelControl.css";

// 显示 ZoomLevel 的控件
export default class ZoomLevelControl implements IControl {
    _map!: Map;
    _container: HTMLElement;
    _zoomLevelAttribution: HTMLElement;
    constructor() {
        this._container = document.createElement('div')
        this._container.className = 'mapboxgl-ctrl-zoom-Level'
        this._container.appendChild(document.createTextNode('Zoom: '))
        this._zoomLevelAttribution = document.createElement('span')
        this._container.appendChild(this._zoomLevelAttribution)
    }
    onAdd(map: Map): HTMLElement {
        this._map = map;
        this._zoomLevelAttribution.innerText = map.getZoom().toFixed(2)
        this._map?.on('zoom', this._updateZoomLevelAttribution)
        return this._container
    }
    onRemove(): void {
        this._map?.off('zoom', this._updateZoomLevelAttribution)
    }

    _updateZoomLevelAttribution() {
        this._zoomLevelAttribution.innerText = this._map!.getZoom().toFixed(2)
    }
}