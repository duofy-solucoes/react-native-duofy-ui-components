"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = void 0;
var _customTW = _interopRequireDefault(require("../../customTW"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getStyles = _ref => {
  let {
    customTw
  } = _ref;
  const base = (0, _customTW.default)`
    font-sans flex
    ${customTw}
  `;
  return {
    base
  };
};
exports.getStyles = getStyles;
//# sourceMappingURL=styles.js.map