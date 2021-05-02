import React from 'react';
import * as UI from './Atoms';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  children,
  ...props
}) => {
  return (
    <UI.Button
      type="button"
      primary={primary}
      size={size}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </UI.Button>
  );
};

export default Button;
