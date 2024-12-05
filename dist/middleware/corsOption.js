"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var WHITELIST = ["https://www.google.com", "http://127.0.0.1:9090", "http://127.0.0.1:9000", "http://127.0.0.1:8000", "http://127.0.0.1:8080", "http://localhost:5173"];
var corsOption = {
  origin: function origin(_origin, callback) {
    if (WHITELIST.indexOf(_origin) !== -1 || !_origin) {
      console.log("CORS ORIGIN: ", _origin);
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};
var _default = exports["default"] = corsOption;