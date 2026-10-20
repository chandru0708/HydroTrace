import React from 'react';

export default function PressButton({ children, onClick, href, variant = 'yellow', className = '', ...props }) {
  const Component = href ? 'a' : 'button';
  const variantClass = `btn-${variant}`;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`btn-press ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
