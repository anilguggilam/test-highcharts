

import Highcharts from 'highcharts/highstock';
import 'highcharts/highcharts-more';
import 'highcharts/modules/map';
import 'highcharts/modules/tiledwebmap';
import HighchartsReact from 'highcharts-react-official';

const globalOptions = {

    chart: {
        margin: 0,
    },

    title: {
        text: null
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            alignTo: 'spacingBox'
        }
    },

    mapView: {
        fitToGeometry: {
            type: 'MultiPoint',
            coordinates: [
                [-140, 75],
                [140, -35]
            ]
        }
    },

    legend: {
        backgroundColor: 'rgba(255,255,255,0.85)',
        align: 'left',
        layout: 'vertical',
        symbolRadius: 0,
        borderRadius: 2,
        itemHiddenStyle: {
            color: 'rgba(128,128,128,0.3)'
        },
        reversed: true
    },

    series: [{
        type: 'tiledwebmap',
        name: 'TWM Tiles',
        provider: {
            type: 'OpenStreetMap',
            theme: 'Standard'
        },
        color: 'rgba(128,128,128,0.3)'
    }, {
        type: 'mappoint',
        name: 'Mappoints',
        enableMouseTracking: false,
        states: {
            inactive: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: true
        },
        data: [{
            name: 'London',
            lat: 51.507222,
            lon: -0.1275
        }, {
            name: 'Vik i Sogn',
            lat: 61.087220,
            lon: 6.579700
        }, {
            name: 'Krakow',
            lon: 19.944981,
            lat: 50.064651
        }, {
            name: 'Kowloon',
            lon: 114.183,
            lat: 22.317
        }, {
            name: 'Windhoek',
            lat: -22.55900,
            lon: 17.06429
        }, {
            name: 'Doha',
            lat: 25.28547,
            lon: 51.53037
        }, {
            name: 'Vancouver',
            lat: 49.28315,
            lon: -123.12202
        }]
    }, {
        type: 'mapline',
        color: 'black',
        name: 'Maplines',
        states: {
            inactive: {
                enabled: false
            }
        },
        data: [{
            geometry: {
                type: 'LineString',
                coordinates: [
                    [-123.12202, 49.28315], // Vancouver
                    [-0.1275, 51.507222] // London
                ]
            }
        },
        {
            geometry: {
                type: 'LineString',
                coordinates: [
                    [51.53037, 25.28547], // Doha
                    [114.183, 22.317] // Kowloon
                ]
            }
        }
        ],
        lineWidth: 2,
        enableMouseTracking: false
    }]
};

export default function Chart () {
    return <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'mapChart'}
        options={globalOptions}
      />
    </div>
}