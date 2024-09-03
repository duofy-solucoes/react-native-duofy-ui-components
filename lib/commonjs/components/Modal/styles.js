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
  const overlay = (0, _customTW.default)`
    font-sans flex grow bg-brand-black-lightest
  `;
  const base = (0, _customTW.default)`
    font-sans flex flex-col absolute p-3 bottom-0 bg-white w-[100%] rounded-t-4 shadow-lg
    ${customTw}
  `;
  const title = (0, _customTW.default)`
    font-sans flex grow flex-row items-center justify-between
  `;
  return {
    overlay,
    base,
    title
  };
};
exports.getStyles = getStyles;
//# sourceMappingURL=styles.js.map