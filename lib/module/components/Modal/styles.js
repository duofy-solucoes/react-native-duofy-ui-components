import tw from '../../customTW';
export const getStyles = _ref => {
  let {
    customTw
  } = _ref;
  const overlay = tw`
    font-sans flex grow bg-brand-black-lightest
  `;
  const base = tw`
    font-sans flex flex-col absolute p-3 bottom-0 bg-white w-[100%] rounded-t-4 shadow-lg
    ${customTw}
  `;
  const title = tw`
    font-sans flex grow flex-row items-center justify-between
  `;
  return {
    overlay,
    base,
    title
  };
};
//# sourceMappingURL=styles.js.map