import tw from '../../customTW';
export const getStyles = _ref => {
  let {
    customTw
  } = _ref;
  const base = tw`
    flex bg-transparent font-sans
    ${customTw}
  `;
  return {
    base
  };
};
//# sourceMappingURL=styles.js.map