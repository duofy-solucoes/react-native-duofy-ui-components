/* eslint-disable no-extend-native */

Number.prototype.toCurrency = function (props) {
  const {
    style = 'currency',
    currency = 'BRL',
    signDisplay = 'never',
    useGrouping = true,
    locale = 'pt-BR',
    ...rest
  } = props;
  const toFormat = Intl.NumberFormat(locale, {
    style,
    currency,
    signDisplay,
    useGrouping,
    ...rest
  });
  return toFormat.format(this);
};
//# sourceMappingURL=extensions.js.map