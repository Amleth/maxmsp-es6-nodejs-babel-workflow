global.post = message => console.log(message);
global.outlet = (...args) => console.log('OUTLET', args.map(JSON.stringify).join(' --> ').substring(0, 69) + '...');

import {bang} from './src/my-script';
bang();