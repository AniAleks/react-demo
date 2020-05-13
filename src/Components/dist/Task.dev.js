"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function idGenerator() {
  return Math.random().toString(32).slice(2);
}

function Task() {}

var _default = Task;
exports["default"] = _default;