"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BlackBrandSecondary = exports.BlackBrandPrimary = exports.BlackBrandLightest = exports.BlackBrandLighter = exports.BlackBrandLight = void 0;
var _Text = _interopRequireDefault(require("./Text"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'System Color',
  component: _Text.default,
  args: {
    text: 'Black Brand Color',
    size: 'title1',
    brandColor: 'black',
    opacity: 'primary'
  }
};
exports.default = _default;
const BlackBrandPrimary = {
  args: {
    text: 'Black Brand Primary',
    brandColor: 'black',
    opacity: 'primary'
  }
};
exports.BlackBrandPrimary = BlackBrandPrimary;
const BlackBrandSecondary = {
  args: {
    text: 'Black Brand Secondary',
    brandColor: 'black',
    opacity: 'secondary'
  }
};
exports.BlackBrandSecondary = BlackBrandSecondary;
const BlackBrandLighter = {
  args: {
    text: 'Black Brand Lighter',
    brandColor: 'black',
    opacity: 'lighter'
  }
};
exports.BlackBrandLighter = BlackBrandLighter;
const BlackBrandLight = {
  args: {
    text: 'Black Brand Light',
    brandColor: 'black',
    opacity: 'light'
  }
};
exports.BlackBrandLight = BlackBrandLight;
const BlackBrandLightest = {
  args: {
    text: 'Black Brand Lightest',
    brandColor: 'black',
    opacity: 'lightest'
  }
};
exports.BlackBrandLightest = BlackBrandLightest;
//# sourceMappingURL=color.black.stories.js.map