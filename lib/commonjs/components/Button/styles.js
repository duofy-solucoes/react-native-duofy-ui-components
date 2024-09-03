"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = void 0;
var _customTW = _interopRequireDefault(require("../../customTW"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getStyles = _ref => {
  let {
    variant,
    customTw,
    disabled
  } = _ref;
  const getVariant = {
    primary: {
      default: '',
      bg: disabled ? 'bg-brand-black-light' : 'bg-brand-primary',
      textColor: 'white',
      shadow: ''
    },
    secondary: {
      default: '',
      bg: disabled ? 'bg-brand-black-light' : 'bg-brand-secondary',
      textColor: 'white',
      shadow: ''
    },
    outline: {
      default: `${disabled ? 'border-brand-black-lightest' : 'border-brand-primary'} border-solid border`,
      bg: 'bg-transparent',
      textColor: disabled ? 'brand-black-light' : 'brand-primary',
      shadow: ''
    },
    transparent: {
      default: 'border-0',
      bg: 'bg-transparent',
      textColor: disabled ? 'brand-black-light' : 'brand-primary ',
      shadow: ''
    },
    card: {
      default: 'border-0',
      bg: 'bg-white',
      textColor: 'brand-black-primary',
      shadow: 'shadow'
    }
  };
  const base = (0, _customTW.default)`
    flex rounded-lg h-12 justify-center items-center font-sans
    ${getVariant[variant].default}
    ${getVariant[variant].bg}
    ${getVariant[variant].shadow}
    ${customTw}
  `;
  const textColor = getVariant[variant].textColor;
  return {
    base,
    textColor
  };
};
exports.getStyles = getStyles;
//# sourceMappingURL=styles.js.map