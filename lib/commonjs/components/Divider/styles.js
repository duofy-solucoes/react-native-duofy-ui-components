"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = void 0;
var _customTW = _interopRequireDefault(require("../../customTW"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getStyles = _ref => {
  let {
    customTw,
    size
  } = _ref;
  const base = (0, _customTW.default)`
    flex flex-row pt-2 pb-2 items-center font-sans
    ${customTw}
  `;
  const divider = (0, _customTW.default)`
    flex font-sans grow h-[${size}px] bg-brand-primary-gray-light
  `;
  const dividerText = (0, _customTW.default)`
    font-sans pl-3 pr-3
  `;
  return {
    base,
    divider,
    dividerText
  };
};
exports.getStyles = getStyles;
//# sourceMappingURL=styles.js.map