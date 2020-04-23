/**
 * Node Version：any version
 * Command：node node-cjs-test.js
 * PS: package.json 中 type 不设置 module
 */

const main = require('../modules/cjs');

main.foo();
