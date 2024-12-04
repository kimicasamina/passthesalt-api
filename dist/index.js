"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_dotenv["default"].config();
var app = (0, _express["default"])();
var port = process.env.PORT || 3000;
app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.listen(port, function () {
  console.log("Server running on port ".concat(port, " in ").concat(process.env.NODE_ENV, " mode"));
});