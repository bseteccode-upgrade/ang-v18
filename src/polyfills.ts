// /***************************************************************************************************
//  * BROWSER POLYFILLS
//  */
// import 'zone.js';  
// import 'hammerjs';           
// import { Buffer } from 'buffer';

// /* Required for Froala, crypto-browserify, old jQuery plugins */
// (window as any).global = window;
// (window as any).Buffer = Buffer;
// (window as any).process = {
//   env: { DEBUG: undefined }
// };

// /* Icons */
// import './icon';

import 'zone.js';

/* Optional gesture support (only if needed) */
// import 'hammerjs';

/* Buffer / Node global shims for libraries that need them */
import { Buffer } from 'buffer';
(window as any).global = window;
(window as any).Buffer = Buffer;
(window as any).process = {
  env: { DEBUG: undefined }
};

/* If you have an 'icon' loader file, keep it; else remove this import */
import './icon';
