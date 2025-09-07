import React from 'react';

interface TextAreaProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  required?: boolean;
  rows?: number;
  cols?: number;
  className?: string;
  name?: string;
  id?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  placeholder = '',
  value,
  onChange,
  disabled = false,
  required = false,
  rows = 4,
  cols,
  className = '',
  name,
  id,
  ...props
}) => {
  const baseClasses = 'w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-vertical';
  
  const textareaClasses = `
    ${baseClasses}
    ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      rows={rows}
      cols={cols}
      className={textareaClasses}
      name={name}
      id={id}
      {...props}
    />
  );
};

export default TextArea;