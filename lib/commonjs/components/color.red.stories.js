"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RedLightest = exports.RedLighter = exports.RedLight = exports.RedDarker = exports.RedDark = void 0;
var _Text = _interopRequireDefault(require("./Text"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'System Color',
  component: _Text.default,
  args: {
    text: 'Red Color',
    size: 'title1',
    color: 'red'
  }
};
exports.default = _default;
const RedDarker = {
  args: {
    text: 'Red Darker',
    opacity: 'darker'
  }
};
exports.RedDarker = RedDarker;
const RedDark = {
  args: {
    text: 'Red Dark',
    opacity: 'dark'
  }
};
exports.RedDark = RedDark;
const RedLighter = {
  args: {
    text: 'Red Lighter',
    opacity: 'lighter'
  }
};
exports.RedLighter = RedLighter;
const RedLight = {
  args: {
    text: 'Red Light',
    opacity: 'light'
  }
};
exports.RedLight = RedLight;
const RedLightest = {
  args: {
    text: 'Red Lightest',
    opacity: 'lightest'
  }
};
exports.RedLightest = RedLightest;
//# sourceMappingURL=color.red.stories.js.map