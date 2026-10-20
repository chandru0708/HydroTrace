import React from 'react';

export default function GlassPanel({ 
  children, 
  className = '', 
  variant = 'default', // 'default', 'cyan', 'violet', 'orange'
  ...props 
}) {
  const variantClasses = {
    default: 'glass-panel',
    cyan: 'glass-panel-cyan',
    violet: 'glass-panel-violet',
    orange: 'glass-panel-orange'
  };

  return (
    <div 
      className={`relative p-6 sm:p-7 md:p-8 rounded-2xl transition-all duration-200 ${variantClasses[variant] || 'glass-panel'} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
