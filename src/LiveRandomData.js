import {useRef, useState, useCallback} from 'react';

import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const globalOptions = {
    accessibility: {
        enabled: false
    },

    time: {
        useUTC: false
    },

    rangeSelector: {
        buttons: [{
            count: 1,
            type: 'minute',
            text: '1M'
        }, {
            count: 5,
            type: 'minute',
            text: '5M'
        }, {
            type: 'all',
            text: 'All'
        }],
        inputEnabled: false,
        selected: 0
    },

    title: {
        text: 'Live random data'
    },

    exporting: {
        enabled: false
    },

    series: [{
        name: 'Random data',
        data: (function () {
            const data = [],
                time = (new Date()).getTime();

            for (let i = -999; i <= 0; i += 1) {
                data.push([
                    time + i * 1000,
                    Math.round(Math.random() * 100)
                ]);
            }
            return data;
        }())
    }]
};

export default function Chart () {
    const chartRef = useRef();
    const intervalRef = useRef();
    const [options, setOptions] = useState(globalOptions)

    const ChartOnLoadCB = useCallback(()=>{
        intervalRef.current = setInterval(() => {
            const x = (new Date()).getTime(), // current time
                y = Math.round(Math.random() * 100);

            setOptions(prev => {
                return {
                    ...prev,
                    series: [{
                        name: 'Random data',
                        data: [...prev.series[0].data, [x,y]]
                    }]
                };
            })
        }, 1000);
    });

    return <div>
      <HighchartsReact
        ref={chartRef}
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
        callback={ChartOnLoadCB}
      />
    </div>
}