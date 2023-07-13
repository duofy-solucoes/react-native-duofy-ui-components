import tw from '../../customTW';

export const getStyles = ({variant}: any) => {
  const getVariant = {
    primary: {
      default: '',
      bg: 'bg-yellow-brand-primary',
      textColor: 'white',
    },
    secondary: {
      default: '',
      bg: 'bg-yellow-brand-secondary',
      textColor: 'white',
    },
    outline: {
      default: 'border-yellow-brand-primary border-solid border',
      bg: 'bg-transparent',
      textColor: 'yellow-brand-primary ',
    },
    transparent: {
      default: 'border-0',
      bg: 'bg-transparent',
      textColor: 'yellow-brand-primary ',
    },
  };

  const base = tw`
    flex rounded-lg h-12 content-center items-center p-3
    ${getVariant[variant].default}
    ${getVariant[variant].bg}
  `;

  const textColor = getVariant[variant].textColor;

  return {base, textColor};
};
