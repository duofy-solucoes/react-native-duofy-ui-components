"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GraySecondaryLightest = exports.GraySecondaryLighter = exports.GraySecondaryLight = exports.GraySecondaryBase = void 0;
var _Text = _interopRequireDefault(require("./Text"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'System Color',
  component: _Text.default,
  args: {
    text: 'Secondary Gray Color',
    size: 'title1',
    color: 'secondary-gray'
  }
};
exports.default = _default;
const GraySecondaryBase = {
  args: {
    text: 'Secondary Gray Base',
    opacity: 'base'
  }
};
exports.GraySecondaryBase = GraySecondaryBase;
const GraySecondaryLighter = {
  args: {
    text: 'Secondary Gray Lighter',
    opacity: 'lighter'
  }
};
exports.GraySecondaryLighter = GraySecondaryLighter;
const GraySecondaryLight = {
  args: {
    text: 'Secondary Gray Light',
    opacity: 'light'
  }
};
exports.GraySecondaryLight = GraySecondaryLight;
const GraySecondaryLightest = {
  args: {
    text: 'Secondary Gray Lightest',
    opacity: 'lightest'
  }
};
exports.GraySecondaryLightest = GraySecondaryLightest;
//# sourceMappingURL=color.secondary-gray.stories.js.map