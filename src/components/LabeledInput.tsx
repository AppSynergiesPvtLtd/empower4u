import { Input } from '@/components/ui/input'; 
import React from 'react';

interface LabeledInputProps {
  label: string;
  placeholder: string;
  labelPrefix: string;
  name: string;
  type?: string;
}

const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  placeholder,
  labelPrefix,
  name,
  type = "text",
}) => (
  <div className="ml-2">
    <label className="text-base font-medium text-maintext block mt-4">
      <span className={`font-bold ${labelPrefix ? 'mr-2' : 'mr-7'}`}>{labelPrefix}</span> {label}
    </label>
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full p-2 border border-maintext rounded mt-2 ml-7"
    />
  </div>
);

export default LabeledInput;

