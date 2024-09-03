"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GrayPrimaryLightest = exports.GrayPrimaryLighter = exports.GrayPrimaryLight = exports.GrayPrimaryBase = void 0;
var _Text = _interopRequireDefault(require("./Text"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'System Color',
  component: _Text.default,
  args: {
    text: 'Primary Gray Color',
    size: 'title1',
    color: 'primary-gray'
  }
};
exports.default = _default;
const GrayPrimaryBase = {
  args: {
    text: 'Primary Gray Base',
    opacity: 'base'
  }
};
exports.GrayPrimaryBase = GrayPrimaryBase;
const GrayPrimaryLighter = {
  args: {
    text: 'Primary Gray Lighter',
    opacity: 'lighter'
  }
};
exports.GrayPrimaryLighter = GrayPrimaryLighter;
const GrayPrimaryLight = {
  args: {
    text: 'Primary Gray Light',
    opacity: 'light'
  }
};
exports.GrayPrimaryLight = GrayPrimaryLight;
const GrayPrimaryLightest = {
  args: {
    text: 'Primary Gray Lightest',
    opacity: 'lightest'
  }
};
exports.GrayPrimaryLightest = GrayPrimaryLightest;
//# sourceMappingURL=color.primary-gray.stories.js.map