import React from 'react';
import './button.scss';

export const Button = ({
  title = 'Button',
  onClick,
}: {
  title?: string,
  onClick?: () => void
}) => {
  return (
    <button>{title}</button>
  );
};
