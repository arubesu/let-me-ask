import { ButtonHTMLAttributes } from 'react';

import { CustomButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
};

export const Button = ({ isOutlined = false, ...props }: ButtonProps) => {
  return <CustomButton
    className={`button ${isOutlined ? 'outlined' : ''}`}
    {...props}
  />;
}
