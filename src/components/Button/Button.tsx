import { ButtonHTMLAttributes } from 'react';

import { CustomButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps) => {
  return <CustomButton {...props} />;
}
