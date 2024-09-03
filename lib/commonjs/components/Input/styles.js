"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = void 0;
var _customTW = _interopRequireDefault(require("../../customTW"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getStyles = _ref => {
  let {
    onError,
    isValid,
    isActive
  } = _ref;
  const inputContainer = (0, _customTW.default)`
    font-sans flex flex-col
  `;
  const label = (0, _customTW.default)`
    font-sans mb-2
  `;
  const caption = (0, _customTW.default)`
    font-sans mt-2
  `;
  const container = (0, _customTW.default)`
    font-sans flex flex-row items-center
  `;
  const input = (0, _customTW.default)`
    font-sans flex-1 h-12 bg-white border-brand-black-lighter border border-solid rounded-lg p-2
    ${onError || !isValid ? 'border-brand-red-dark' : ''}
    ${isActive && isValid && !onError ? 'border-brand-primary' : ''}
  `;
  const icon = (0, _customTW.default)`
    font-sans absolute right-3
  `;
  return {
    inputContainer,
    label,
    caption,
    container,
    input,
    icon
  };
};
exports.getStyles = getStyles;
//# sourceMappingURL=styles.js.map