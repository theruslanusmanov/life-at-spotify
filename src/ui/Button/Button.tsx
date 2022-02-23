import React from 'react';
import './button.scss';

export const Button = ({title = 'Button'}: { title?: string }) => {
  return (
    <button>{title}</button>
  );
};
