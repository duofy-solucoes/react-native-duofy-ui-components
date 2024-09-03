"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GreenLightest = exports.GreenLighter = exports.GreenLight = exports.GreenDarker = exports.GreenDark = void 0;
var _Text = _interopRequireDefault(require("./Text"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'System Color',
  component: _Text.default,
  args: {
    text: 'Green Color',
    size: 'title1',
    color: 'green'
  }
};
exports.default = _default;
const GreenDarker = {
  args: {
    text: 'Green Darker',
    opacity: 'darker'
  }
};
exports.GreenDarker = GreenDarker;
const GreenDark = {
  args: {
    text: 'Green Dark',
    opacity: 'dark'
  }
};
exports.GreenDark = GreenDark;
const GreenLighter = {
  args: {
    text: 'Green Lighter',
    opacity: 'lighter'
  }
};
exports.GreenLighter = GreenLighter;
const GreenLight = {
  args: {
    text: 'Green Light',
    opacity: 'light'
  }
};
exports.GreenLight = GreenLight;
const GreenLightest = {
  args: {
    text: 'Green Lightest',
    opacity: 'lightest'
  }
};
exports.GreenLightest = GreenLightest;
//# sourceMappingURL=color.green.stories.js.map