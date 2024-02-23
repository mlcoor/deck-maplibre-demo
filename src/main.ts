import { Map, NavigationControl } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { PointOverLay, defaultPointOverlayerProps } from './layers/pointLayer';
import './style.css';

// 创建底图
const map = new Map({
    container: 'map',
    style: 'https://maps.geoapify.com/v1/styles/maptiler-3d/style.json?apiKey=ed37e7dad41d49e097369eaeab9d71e1',
    center: [113.29, 23.14],
    zoom: 3,
});

// 添加 deck.gl 地图控制器

map.addControl(new NavigationControl(), 'top-left')

map.addControl(new PointOverLay(defaultPointOverlayerProps) as any)
// map.addControl(new ZoomLevelControl(), 'bottom-left')
