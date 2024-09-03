"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = void 0;
var _customTW = _interopRequireDefault(require("../../customTW"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getStyles = props => {
  const {
    plusDisabled,
    minusDisabled,
    inputDisabled
  } = props;
  const container = (0, _customTW.default)`
    flex flex-row rounded-full border border-solid border-brand-black-lighter h-8
    items-center justify-between
  `;
  const input = (0, _customTW.default)`flex flex-row items-center justify-center grow text-center font-bold p-0 m-0 ${inputDisabled ? 'text-brand-black-light' : 'text-brand-black-primary'}`;
  const incColor = plusDisabled ? _customTW.default.color(`brand-black-light`) : _customTW.default.color(`brand-primary`);
  const decColor = minusDisabled ? _customTW.default.color(`brand-black-light`) : _customTW.default.color(`brand-black-lighter`);
  return {
    container,
    input,
    incColor,
    decColor
  };
};
exports.getStyles = getStyles;
//# sourceMappingURL=styles.js.map