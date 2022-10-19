// import './flutter.js';
// const a = require('./flutter.js')();
// console.log('aaaaaaaa', a);

import { useEffect } from 'react';

// import './main.dart';

const serviceWorkerVersion = '3118366335';
const Chart = () => {
  useEffect(() => {
    window.parent.addEventListener('message', handleMessage, false);
    function handleMessage(e: any) {
      if ('get_data' == e.data) {
        let data = {
          type: 6,
          style: {
            animation_duration: 1000,
            background_color: [0, 0, 0],
            background_opacity: 0.5,
            domain_label: 'Domain',
            // 'dot_radius': 3,
            expand: true,
            // 'size': {
            //   'width': 800,
            //   'height': 600,
            // },
            grid: true,
            grid_color: [255, 255, 255],
            grid_opacity: 0.3,
            grid_width: 1,
            label_style: {
              color: [255, 255, 255],
              font_size: 16,
              font_weight: 400,
            },
            bar_outer_spacing: 50,
            // 'bar_inner_spacing': 2,
            // 'line_width': 1,
            measure_label: 'Measure',
            padding: 0,
            // 'show_area': true,
            // 'area_opacity': 0.1,
          },
          series: [
            {
              title: 'Bus',
              color: [0, 255, 0], //green
              opacity: 1,
              spots: [
                {
                  domain: 0,
                  measure: 150,
                },
                {
                  domain: 1,
                  measure: 292,
                },
                {
                  domain: 2,
                  measure: 24,
                },
                {
                  domain: 3,
                  measure: 107,
                },
                {
                  domain: 4,
                  measure: 257,
                },
                {
                  domain: 5,
                  measure: 258,
                },
              ],
            },
            {
              title: 'Car',
              color: [255, 0, 0], //red
              opacity: 1,
              spots: [
                {
                  domain: 0,
                  measure: 137,
                },
                {
                  domain: 1,
                  measure: 236,
                },
                {
                  domain: 2,
                  measure: 139,
                },
                {
                  domain: 3,
                  measure: 61,
                },
                {
                  domain: 4,
                  measure: 86,
                },
                {
                  domain: 5,
                  measure: 97,
                },
              ],
            },
            {
              title: 'Truck',
              color: [0, 0, 255], //blue
              opacity: 1,
              spots: [
                {
                  domain: 0,
                  measure: 23,
                },
                {
                  domain: 1,
                  measure: 26,
                },
                {
                  domain: 2,
                  measure: 7,
                },
                {
                  domain: 3,
                  measure: 37,
                },
                {
                  domain: 4,
                  measure: 293,
                },
                {
                  domain: 5,
                  measure: 193,
                },
              ],
            },
            {
              title: 'Bike',
              color: [0, 255, 255], //cyan
              opacity: 1,
              spots: [
                {
                  domain: 0,
                  measure: 118,
                },
                {
                  domain: 1,
                  measure: 288,
                },
                {
                  domain: 2,
                  measure: 220,
                },
                {
                  domain: 3,
                  measure: 49,
                },
                {
                  domain: 4,
                  measure: 300,
                },
                {
                  domain: 5,
                  measure: 284,
                },
              ],
            },
          ],
        };

        window.parent.postMessage(JSON.stringify(data), '*');
      }
    }
    // Download main.dart.js
    // _flutter.loader
    //   .loadEntrypoint({
    //     serviceWorker: {
    //       serviceWorkerVersion: serviceWorkerVersion,
    //     },
    //   })
    //   .then(function (engineInitializer: any) {
    //     return engineInitializer.initializeEngine();
    //   })
    //   .then(function (appRunner: any) {
    //     return appRunner.runApp();
    //   });
    window.addEventListener('load', function (ev) {
      // console.log('??????');
    });
    const script = document.createElement('script');
    script.defer = true;
    script.src = 'flutter.js';

    console.log();
    const x = document.getElementById('abc').appendChild(script);
  });
  return <div id='abc'></div>;
};

export default Chart;
