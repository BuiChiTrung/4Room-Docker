"use strict";
/* IMPORT */
Object.defineProperty(exports, "__esModule", { value: true });
var adjust_channel_1 = require("./adjust_channel");
/* DESATURATE */
function desaturate(color, amount) {
    return adjust_channel_1.default(color, 's', -amount);
}
/* EXPORT */
exports.default = desaturate;
