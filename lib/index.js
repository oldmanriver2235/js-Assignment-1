'use strict';

var _lib = require('./lib.js');

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// returns a number
console.log(typeof (0, _lib2.default)(1901, 2000) === 'number',

//returns 171 when between 1901 and 2000
console.log((0, _lib2.default)(1901, 2000)) === 171,

//returns 200 when between 1991 and 201
console.log((0, _lib2.default)(1901, 2017)) === 200,

//returns 1 when 1991 
console.log((0, _lib2.default)(1991)) === 1);