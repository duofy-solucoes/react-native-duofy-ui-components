"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SwitchEnabled = exports.SwitchDisabled = void 0;
var _ = _interopRequireDefault(require("."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'Switch',
  component: _.default,
  args: {}
};
exports.default = _default;
const SwitchDisabled = {};
exports.SwitchDisabled = SwitchDisabled;
const SwitchEnabled = {
  args: {
    value: true
  }
};
exports.SwitchEnabled = SwitchEnabled;
//# sourceMappingURL=index.stories.js.map