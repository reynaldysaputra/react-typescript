import React from 'react';

type ButtonProps = {
  variant: 'primary' | 'secondary',
  children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

function CustomButton({variant, children, ...rest}: ButtonProps) {
  return(
    <button 
      style={{background: variant === 'primary' ? 'lightskyblue' : 'red'}} 
      {...rest}
    >
      {children}
    </button>
  )
}

export default CustomButton;