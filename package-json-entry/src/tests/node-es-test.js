/**
 * Node Version：v13.12.0
 * Command：node node-es-test.js
 * PS: package.json type 设置为 module，或者统一使用 mjs 后缀
 */

import { foo as mfoo } from '../modules/esm/index.mjs';

// the following code still works in Node 13
import { foo } from '../modules/esm/index.js';


mfoo();
foo();