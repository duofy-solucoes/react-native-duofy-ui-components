"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BlueLightest = exports.BlueLighter = exports.BlueLight = exports.BlueDarker = exports.BlueDark = void 0;
var _Text = _interopRequireDefault(require("./Text"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'System Color',
  component: _Text.default,
  args: {
    text: 'Blue Color',
    size: 'title1',
    color: 'blue'
  }
};
exports.default = _default;
const BlueDarker = {
  args: {
    text: 'Blue Darker',
    opacity: 'darker'
  }
};
exports.BlueDarker = BlueDarker;
const BlueDark = {
  args: {
    text: 'Blue Dark',
    opacity: 'dark'
  }
};
exports.BlueDark = BlueDark;
const BlueLighter = {
  args: {
    text: 'Blue Lighter',
    opacity: 'lighter'
  }
};
exports.BlueLighter = BlueLighter;
const BlueLight = {
  args: {
    text: 'Blue Light',
    opacity: 'light'
  }
};
exports.BlueLight = BlueLight;
const BlueLightest = {
  args: {
    text: 'Blue Lightest',
    opacity: 'lightest'
  }
};
exports.BlueLightest = BlueLightest;
//# sourceMappingURL=color.blue.stories.js.map