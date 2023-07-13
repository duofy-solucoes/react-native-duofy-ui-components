import tw from '../../customTW';

export const getStyles = ({onError, isValid, isActive}: any) => {
  const inputContainer = tw`
    flex flex-col
  `;

  const label = tw`
    mb-2
  `;

  const caption = tw`
    mt-3
  `;

  const container = tw`
    flex flex-row items-center
  `;

  const input = tw`
    flex-1 h-12 bg-white border-black-brand-lighter border border-solid rounded-lg p-2
    ${onError || !isValid ? 'border-red-dark' : ''}
    ${isActive && isValid && !onError ? 'border-yellow-brand-primary' : ''}
  `;

  const icon = tw`
    absolute right-3
  `;

  return {inputContainer, label, caption, container, input, icon};
};
