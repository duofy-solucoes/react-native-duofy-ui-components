import tw from '../../customTW';
export const getStyles = _ref => {
  var _color$toLowerCase, _opacity$toLowerCase, _brandColor$toLowerCa, _opacity$toLowerCase2;
  let {
    customTw,
    size,
    weight,
    color,
    opacity,
    brandColor
  } = _ref;
  const base = tw`
    font-sans
    text-${size === null || size === void 0 ? void 0 : size.toLowerCase()}
    font-${weight === null || weight === void 0 ? void 0 : weight.toLowerCase()}
    text-${color !== null && color !== void 0 && (_color$toLowerCase = color.toLowerCase()) !== null && _color$toLowerCase !== void 0 && _color$toLowerCase.length ? `${color === null || color === void 0 ? void 0 : color.toLowerCase()}${opacity !== null && opacity !== void 0 && (_opacity$toLowerCase = opacity.toLowerCase()) !== null && _opacity$toLowerCase !== void 0 && _opacity$toLowerCase.length ? `-${opacity === null || opacity === void 0 ? void 0 : opacity.toLowerCase()}` : ''}` : brandColor !== null && brandColor !== void 0 && (_brandColor$toLowerCa = brandColor.toLowerCase()) !== null && _brandColor$toLowerCa !== void 0 && _brandColor$toLowerCa.length ? `brand-${brandColor === null || brandColor === void 0 ? void 0 : brandColor.toLowerCase()}-${opacity !== null && opacity !== void 0 && (_opacity$toLowerCase2 = opacity.toLowerCase()) !== null && _opacity$toLowerCase2 !== void 0 && _opacity$toLowerCase2.length ? opacity === null || opacity === void 0 ? void 0 : opacity.toLowerCase() : 'primary'}` : 'brand-black-primary'}
    ${customTw}
  `;
  return {
    base
  };
};
//# sourceMappingURL=styles.js.map