import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-input-2/lib/style.css';


interface LabeledInputProps {
  label: string;
  placeholder: string;
  labelPrefix: string;
  name: string;
  type?: string;
  required?: boolean;
  options?: string[];
  register?: any;
}

const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  placeholder,
  labelPrefix,
  name,
  type = "text",
  required = false,
  options = [],
  register,
}) => {
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className="ml-2">
      <label className="text-base font-medium text-maintext block mt-1">
        <span className={`font-bold ${labelPrefix ? 'mr-2' : 'mr-7'}`}>{labelPrefix}</span>
        {label} {required && <span className="text-red-700">*</span>}
      </label>
      {type === "tel" ? (
        <PhoneInput
          country="in"
          value={phone}
          onChange={setPhone}
          inputProps={{
            ...register(name),
            required: required,
            className: 'ml-8 w-full p-3 border border-gray-300 rounded-md focus:outline-none bg-transparent',
          }}
          containerClass="phone-input-container w-full flex"
          inputClass="ml-12 w-full pl-12 bg-transparent"
          buttonClass="phone-input-button"
        />
      ) : type === "radio" ? (
        <div className="flex items-center space-x-4 mt-2 ml-7">
          {options.map((option) => (
            <label key={option} className="text-base font-medium text-maintext flex items-center">
              <input
                type="radio"
                {...register(name)}
                value={option}
                required={required}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      ) : type === "date" ? (
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          placeholderText={placeholder}
          dateFormat="MM/dd/yyyy"
          className="w-full p-3 border border-gray-300 rounded mt-2 ml-7 bg-transparent"
          {...register(name)}
        />
      ) : (
        <input
          type={type}
          {...register(name)}
          placeholder={placeholder}
          required={required}
          className="w-full p-2 border border-gray-300 rounded mt-2 ml-7 bg-transparent"
        />
      )}
    </div>
  );
};

export default LabeledInput;
