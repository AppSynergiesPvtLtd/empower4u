import { Input } from '@/components/ui/input'; 
import React, { useRef } from 'react';
import { FaUpload } from 'react-icons/fa';

interface LabeledInputProps {
  label: string;
  placeholder: string;
  labelPrefix: string;
  name: string;
  type?: string;
  required?: boolean;
  options?: string[];
}

const LabeledInputInline<LabeledInputProps> = ({
  label,
  placeholder,
  labelPrefix,
  name,
  type = "text",
  required = false,
   options = [],
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="flex items-center ml-2">
      <label className="text-base font-medium text-maintext mr-2">
        <span className={`font-bold ${labelPrefix ? 'mr-2' : 'mr-4'}`}>
          {labelPrefix}
        </span>
        {label} {required && <span className="text-red-700">*</span>}
      </label>
      
      {type === "file" ? (
        <div
          onClick={handleClick}
          className="ml-8 w-32 h-8 border-2 border-dashed border-maintext flex justify-center items-center cursor-pointer rounded-md hover:bg-purple-100"
        >
          <FaUpload className="text-maintext text-xl" />
          <input
            ref={inputRef}
            type="file"
            name={name}
            required={required}
            className="hidden"
          />
        </div>
      ) :  type === "radio" ? (
        <div className="flex items-center space-x-4 mt-2 ml-7">
          {options.map((option) => (
            <label key={option} className="text-base font-medium text-maintext flex items-center">
              <input
                type="radio"
                name={name}
                value={option}
                required={required}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      ) : (
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className="w-1/5 p-2 border border-gray-300 rounded"
        />
      )}
    </div>
  );
};

export default LabeledInputInline;
