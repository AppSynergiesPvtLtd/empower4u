"use client";

import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { motion } from "framer-motion";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Toaster, toast } from 'react-hot-toast';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import React, { useRef, useState, useEffect } from 'react';
import { Checkbox, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "@/lib/firebase";

const FormDatePicker = ({ label, registerName, control, required = false }) => (
  <motion.div className="mb-4 ml-5" initial={{ opacity: 0, scale: 1.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    scale: {
                      type: "spring",
                      damping: 15,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}>
    <label className="block font-medium text-maintext mb-2">{label}</label>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        name={registerName}
        control={control}
        rules={{ required }}
        render={({ field, fieldState: { error } }) => (
          <DatePicker
            {...field}
            onChange={(date) => field.onChange(date)}
            renderInput={(params) => (
              <TextField
                {...params}
                required={required}
                fullWidth
                variant="outlined"
                placeholder="Enter Date"
                error={!!error}
                helperText={error ? 'This field is required' : null} 
                aria-invalid={!!error}
              />
            )}
          />
        )}
      />
    </LocalizationProvider>
  </motion.div>
);


const FormTextInput = ({ label, registerName, register, placeholder, type = 'text', required = false, req_star = false }) => (
  <motion.div className="mb-4 ml-5" initial={{ opacity: 0, scale: 1.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    scale: {
                      type: "spring",
                      damping: 15,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}>
    <label className="block font-medium text-maintext">{label} {req_star && <span className="text-red-500">*</span>}</label>
    <input
      type={type}
      {...register(registerName, { required })}
      placeholder={placeholder}
      required={required}
      className="w-full p-2 border border-gray-300 rounded ml-5 mt-2 bg-transparent"
    />
  </motion.div>
);

const options = [
    'Stroke Vestibular Disorder',
    "Parkinson's Disease",
    'Spinal Cord Injury',
    'Multiple Sclerosis',
    'Guillain-Barre Syndrome',
    'Rare Neurological Conditions',
    'Others',
  ];

const FormFileInput = ({ label, registerName, register, required = false, setValue }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setValue("referringHealthProfessionalDetails.signature", file);
    }
  };

  return (
    <motion.div className="flex items-center space-x-4 mb-6 ml-5" initial={{ opacity: 0, scale: 1.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    scale: {
                      type: "spring",
                      damping: 15,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}>
      <label className="block font-medium text-maintext mb-2">{label}</label>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
        className="w-40 h-10 flex justify-center items-center cursor-pointer rounded-md hover:bg-purple-100"
      >
        <input
          type="file"
          hidden
          {...register(registerName, { required })}
          required={required}
          onChange={handleFileChange}
        />
      </Button>
      {fileName && (
        <p className="text-sm mt-2 text-gray-600">Selected File: {fileName}</p>
      )}
    </motion.div>
  );
};


const FormTextArea = ({ label, registerName, register, placeholder, required = false }) => (
  <motion.div className="mb-6" initial={{ opacity: 0, scale: 1.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    scale: {
                      type: "spring",
                      damping: 15,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}>
    <label className="text-xl font-bold font-inter">{label}</label>
    <textarea
      {...register(registerName, { required })}
      placeholder={placeholder}
      required={required}
      className="w-full p-2 bg-transparent border border-gray-300 rounded mt-2"
      rows={3}
    />
  </motion.div>
);

const FormRadioGroup = ({ label, options, registerName, register, required = false }) => (
  <FormControl component="fieldset" className="!mb-4">
    <motion.div className=" items-center" initial={{ opacity: 0, scale: 1.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    scale: {
                      type: "spring",
                      damping: 15,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}>
      <FormLabel component="legend" className="block !text-maintext mr-4 ml-5">
        {label}
      </FormLabel>
      <RadioGroup
        row
        {...register(registerName, { required })} 
        className="ml-5 flex items-center space-x-1"
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option}
            control={
              <Radio
                sx={{
                  color: '#4f296b',
                  '&.Mui-checked': {
                    color: '#4f296b',
                  },
                }}
              />
            }
            label={option}
            className="text-base font-medium !text-maintext !ml-3 !my-1"
          />
        ))}
      </RadioGroup>
    </motion.div>
  </FormControl>
);

const FormPhoneInput = ({ label, registerName, setValue, required = false, req_star= false }) => (
  <motion.div className="mb-4 ml-5" initial={{ opacity: 0, scale: 1.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    scale: {
                      type: "spring",
                      damping: 15,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}>
    <label className="block font-medium text-maintext mb-2">{label} {req_star && <span className="text-red-500">*</span>}</label>
    <PhoneInput
      country="in"
      onChange={(value) => {
        setValue(registerName, value);
      }}
      inputProps={{
        required: required,
        className: 'ml-8 w-full p-3 border border-gray-300 rounded-md focus:outline-none bg-transparent',
      }}
      containerClass="phone-input-container w-full flex"
      inputClass="ml-12 w-full pl-12 bg-transparent"
      buttonClass="phone-input-button"
    />
  </motion.div>
);

const ReferralsPage = () => {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [otherInputValue, setOtherInputValue] = useState('');
  
  const { register, watch, handleSubmit, formState: { isValid }, setValue, control } = useForm({
    mode: 'onChange',
    defaultValues: {
      reasonsForReferrals: "",
      therapyInputs: "",
      goals: "",
      specialtyNeuro: "",
      fallsBalance: "",
      surgeryDetails: "",
      fractureJointHealth: "",
      mentalHealthCondition: "",
      functionalStatus: { mobility: "", ADLs: "" },
      medicalHistory: { diagnosedCondition: "", relevantMedicalHistory: "" },
      currentMedications: "",
      clientInfo: { name: "", dob: "", address: "", phoneNumber: "", email: "", emergencyContactName: "", emergencyContactNumber: "" },
      additionalInfo: { hasCaregiver: "", specialHomeConsiderations: "", otherNotes: "" },
      consentProvided: false,
      referringHealthProfessionalDetails: { name: "", profession: "", organizationName: "", phoneNumber: "", email: "", signature: "", consentDate: "", dateOfReferral: "" },
    },
    
  });

  //const signatureFile = watch("referringHealthProfessionalDetails.signature");
  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);

    const file = data.referringHealthProfessionalDetails?.signature;

    if (file) {
      try {
        const storageRef = ref(storage, `uploads/${file.name}`);
        const uploadTask = await uploadBytes(storageRef, file);
        const fileURL = `https://firebasestorage.googleapis.com/v0/b/${storage.bucket}/o/${encodeURIComponent(uploadTask.metadata.fullPath)}?alt=media`;

        data.referringHealthProfessionalDetails.signatureUrl = fileURL;

        console.log('File uploaded successfully:', fileURL);
      } catch (error) {
        console.error('Error uploading file:', error);
        toast.error('File upload failed. Please try again.');
        setLoading(false);
        return;
      }
    }

    try {
      const response = await axios.post(
        'https://us-central1-empower4u-31c1a.cloudfunctions.net/RefferalFormApi/create-referral',
        data,
        { headers: { 'Content-Type': 'application/json' } }
      );
      router.push('/success');
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send enquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };



  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <section className="py-16 px-4 bg-[#f9f5f1] text-maintext">
      <div className="container mx-auto max-w-6xl">
        <Toaster />
        <motion.div initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{
            duration: 0.3,
            scale: {
              type: "spring",
              damping: 14,
              stiffness: 200,
              restDelta: 0.001,
            },
          }}>
        <div className="flex justify-center mb-6">
          <Image src="/icons/top_border.svg" alt="Top Border" width={600} height={400} />
        </div>
        <h1 className="text-4xl font-bold text-center uppercase font-inter my-4">Referrals</h1>
        <div className="flex justify-center mb-12">
          <Image src="/icons/bottom_border.svg" alt="Bottom Border" width={600} height={400} />
        </div>
        </motion.div>
        <motion.div className="flex justify-center mb-12" initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 60 }}
                        transition={{
                        duration: 0.5,
                        delay: 0.3,
                        scale: {
                            type: "spring",
                            damping: 14,
                            stiffness: 200,
                            restDelta: 0.001,
                        },
                        }}>
          <img src="/images/for-professionals/referral-page.webp" alt="referral-page" width={400} height={300} className="rounded-lg shadow-md" />
        </motion.div>

        <form onSubmit={handleSubmit(onSubmit)} className='max-w-4xl mx-auto'>
          <div className="mb-6">
            <motion.h2 initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{
            duration: 0.3,
            scale: {
              type: "spring",
              damping: 14,
              stiffness: 200,
              restDelta: 0.001,
            },
          }} className="text-xl font-bold font-inter">1. Reasons for Referrals <span className="text-red-700"> *</span></motion.h2>
            <FormTextArea
                        label=""
                        registerName="reasonsForReferrals"
                        register={register}
                        placeholder="Write reasons for referrals"
                        required
                      />          
          </div>

          <div className="mb-6">
            <motion.h2 initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{
            duration: 0.3,
            scale: {
              type: "spring",
              damping: 14,
              stiffness: 200,
              restDelta: 0.001,
            },
          }} className="text-xl font-bold font-inter">2. Summary of Therapy Inputs <span className="text-red-700"> *</span></motion.h2>
            <FormTextArea
            label=""
            registerName="therapyInputs"
            register={register}
            placeholder="Write summary of therapy inputs"
            required
          />
          </div>

          <div className="mb-6">
            <motion.h2 initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{
            duration: 0.3,
            scale: {
              type: "spring",
              damping: 14,
              stiffness: 200,
              restDelta: 0.001,
            },
          }} className="text-xl font-bold font-inter">3. Goals <span className="text-red-700"> *</span></motion.h2>
            <FormTextArea
            label=""
            registerName="goals"
            register={register}
            placeholder="Write your goals"
            required
          />
          </div>
          <div className="mb-6">
            <motion.h2 initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{
            duration: 0.3,
            scale: {
              type: "spring",
              damping: 14,
              stiffness: 200,
              restDelta: 0.001,
            },
          }} className="text-xl font-bold font-inter">4. Specialty You Refer To <span className="text-red-700"> *</span></motion.h2>

            <motion.h3 initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{
            duration: 0.3,
            scale: {
              type: "spring",
              damping: 14,
              stiffness: 200,
              restDelta: 0.001,
            },
          }} className="text-lg font-semibold mt-4 mb-2 ml-5"><span className="font-bold mr-2">A.</span> Neuro</motion.h3>
            <motion.div className="ml-4" initial={{ opacity: 0, scale: 1.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    scale: {
                      type: "spring",
                      damping: 15,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}>
              <div className="space-y-2">
                <FormControl component="fieldset">
                  <RadioGroup
                    {...register("specialtyNeuro")}
                    aria-label="specialtyNeuro"
                    onChange={(e) => {
                      const selectedValue = e.target.value;
                      setShowOtherInput(selectedValue === "Others");
                      setValue("specialtyNeuro", selectedValue === "Others" ? otherInputValue : selectedValue);
                    }}
                  >
                    {options.map((option) => (
                      <FormControlLabel
                        key={option}
                        value={option}
                        control={
                          <Radio
                            sx={{
                              color: '#d2d1d6',
                              '&.Mui-checked': {
                                color: '#4f296b',
                              },
                            }}
                          />
                        }
                        label={option}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </div>
              {showOtherInput && (
                <FormTextInput
                  label=""
                  registerName="specialtyNeuro"
                  placeholder="Enter specialty you refer to neuro"
                  register={register}
                  onChange={(e) => {
                    setOtherInputValue(e.target.value);
                    setValue("specialtyNeuro", e.target.value);
                  }}
                />
              )}
            </motion.div>
          </div>

            <motion.h3 initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{
            duration: 0.3,
            scale: {
              type: "spring",
              damping: 14,
              stiffness: 200,
              restDelta: 0.001,
            },
          }} className="text-lg font-semibold mt-4 mb-2 ml-5"><span className="font-bold mr-2">B.</span> Falls/Balance</motion.h3>
            <FormTextInput
            label="Number of Falls in the Last 3 Months"
            registerName="fallsBalance"
            register={register}
            placeholder="Enter number of falls"
            type="number"
            required
          />
            <motion.h3 initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{
            duration: 0.3,
            scale: {
              type: "spring",
              damping: 14,
              stiffness: 200,
              restDelta: 0.001,
            },
          }} className="text-lg font-semibold mt-4 mb-2 ml-5"><span className="font-bold mr-2">C.</span> Surgery Prehab/Rehab</motion.h3>
            <FormTextInput
            label="Specify the (Planned) Surgery"
            registerName="surgeryDetails"
            register={register}
            placeholder="Specify the (Planned) Surgery"
            required
          />

            <motion.h3 initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{
            duration: 0.3,
            scale: {
              type: "spring",
              damping: 14,
              stiffness: 200,
              restDelta: 0.001,
            },
          }} className="text-lg font-semibold mt-4 mb-2 ml-5"><span className="font-bold mr-2">D.</span> Fracture/Joint Health/Amputee</motion.h3>
            <FormTextInput
            label="Specify Involved Joint(s)"
            registerName="fractureJointHealth"
            register={register}
            placeholder="Specify Involved Joint(s)"
            required
          />

            <motion.h3 initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{
            duration: 0.3,
            scale: {
              type: "spring",
              damping: 14,
              stiffness: 200,
              restDelta: 0.001,
            },
          }} className="text-lg font-semibold mt-4 mb-2 ml-5"><span className="font-bold mr-2">E.</span> Mental Health</motion.h3>
            <FormTextInput
            label="Specify diagnosed condition"
            registerName="mentalHealthCondition"
            register={register}
            placeholder="Specify diagnosed condition"
            required
          /> 
          
          <div className="mb-6">
            <motion.h2 initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{
            duration: 0.3,
            scale: {
              type: "spring",
              damping: 14,
              stiffness: 200,
              restDelta: 0.001,
            },
          }} className="text-xl font-bold font-inter my-3">5. Functional Status <span className="text-red-700"> *</span></motion.h2>
            <label className="text-base font-medium text-maintext block my-1 ml-5"> Please provide information about the patient&#39;s current functional abilities:</label>
            <FormTextInput
            label="Mobility"
            registerName="functionalStatus.mobility"
            register={register}
            placeholder="Enter Mobility"
            required
          />
            <FormTextInput
            label="ADLs"
            registerName="functionalStatus.ADLs"
            register={register}
            placeholder="Enter ADLs"
            required
          />
          </div>

          <div className="mb-6">
            <motion.h2 initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{
            duration: 0.3,
            scale: {
              type: "spring",
              damping: 14,
              stiffness: 200,
              restDelta: 0.001,
            },
          }} className="text-xl font-bold font-inter my-3">6. Medical History and Current Condition</motion.h2>
            <FormTextInput
            label="A. Specify Diagnosed Condition"
            registerName="medicalHistory.diagnosedCondition"
            register={register}
            placeholder="Specify diagnosed condition"
          />
            <FormTextInput
            label="B. Relevant Medical History"
            registerName="medicalHistory.relevantMedicalHistory"
            register={register}
            placeholder="Specify relevant medical history"
          />
          <FormTextInput
            label="C. Current Medications"
            registerName="currentMedications"
            register={register}
            placeholder="Specify current medications"
          />
          </div>


          <div className="mb-6">
            <motion.h2 initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{
            duration: 0.3,
            scale: {
              type: "spring",
              damping: 14,
              stiffness: 200,
              restDelta: 0.001,
            },
          }} className="text-xl font-bold font-inter my-3">7. Client Information</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormTextInput
                label="A. Patient Full Name"
                registerName="clientInfo.name"
                register={register}
                placeholder="Patient Full Name"
              />

              <FormDatePicker
              label="B. Date Of Birth"
              registerName="clientInfo.dob"
              control={control}
              required={false}
            />

              <FormPhoneInput
                label="C. Phone Number"
                registerName="clientInfo.phoneNumber"
                setValue={setValue}
                phone={phone}
                setPhone={setPhone}
                
              />
              
              <FormTextInput
                label="D. Email Address"
                registerName="clientInfo.email"
                register={register}
                placeholder="Email Address"
                type="email"
                required={false}
              />
            </div>
              <FormTextInput 
                label="E. Address" 
                placeholder="Address" 
                registerName="clientInfo.address" 
                register={register}
                required={false}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormTextInput 
                  label="F. Emergency Contact Name" 
                  placeholder="Emergency Contact Name" 
                  registerName="clientInfo.emergencyContactName" 
                  register={register}
                  required={false} 
                />

                <FormPhoneInput
                label="G. Emergency Contact Phone"
                registerName="clientInfo.emergencyContactNumber"
                setValue={setValue}
                phone={phone}
                setPhone={setPhone}
              />
                
              </div>
          </div>


          <div className="mb-6">
            <motion.h2 initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{
            duration: 0.3,
            scale: {
              type: "spring",
              damping: 14,
              stiffness: 200,
              restDelta: 0.001,
            },
          }} className="text-xl font-bold font-inter my-3">8. Additional Information</motion.h2>
            <FormRadioGroup
              label="A. Does the Patient Have A Caregiver/Family Member to Assist?"
              options={["Yes", "No"]}
              registerName="additionalInfo.hasCaregiver"
              register={register}
            />
            <FormTextInput label="B. Any Special Home Considerations?" placeholder="Any special home considerations (e.g., stairs, narrow hallways, behavioural issues)?" register={register} registerName={"additionalInfo.specialHomeConsiderations"} />
            <FormTextInput label="C. Other Notes/Additional Information:" placeholder="Other Notes/Additional Information:"  register={register} registerName={"additionalInfo.otherNotes"} />
          </div>

          <div className="mb-8">
            <motion.h2 initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{
            duration: 0.3,
            scale: {
              type: "spring",
              damping: 14,
              stiffness: 200,
              restDelta: 0.001,
            },
          }} className="text-xl font-bold font-inter">9. Consent and Privacy <span className="text-red-700"> *</span></motion.h2>

            <motion.div className='flex items-start my-4' initial={{ opacity: 0, scale: 1.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    scale: {
                      type: "spring",
                      damping: 15,
                      stiffness: 200,
                      restDelta: 0.001,
                    },
                  }}>
              <FormControlLabel
                control={
                  <Checkbox
                    {...register("consentProvided", { required: true })}
                    sx={{
                      color: '#4f296b',
                      '&.Mui-checked': {
                        color: '#4f296b',
                      },
                    }}
                  />}
                label={
                  <span>
                    I confirm that I have discussed this referral with the patient and obtained their
                    consent to share their personal health information for the purpose of arranging
                    home-based physiotherapy services with Empower4U.
                  </span>
                }
              />
            </motion.div>
            

            <FormFileInput
              label="Referring Health Professional Signature"
              registerName="referringHealthProfessionalDetails.signature"
              register={register}
              setValue={setValue}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormDatePicker
              label="Date: "
              registerName="referringHealthProfessionalDetails.consentDate"
              control={control}
              required={true}
            />
            </div>
          </div>

          <div className="mb-6">
            <motion.h2 initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{
            duration: 0.3,
            scale: {
              type: "spring",
              damping: 14,
              stiffness: 200,
              restDelta: 0.001,
            },
          }} className="text-xl font-bold font-inter my-3">10. Referring Health Professional Details</motion.h2>
            <FormTextInput
              label="A. Health Professional Name"
              registerName="referringHealthProfessionalDetails.name"
              register={register}
              placeholder="Enter health professional name"
              required={true}
              req_star={true}
            />

            <FormTextInput
              label="B. Profession/Title"
              registerName="referringHealthProfessionalDetails.profession"
              register={register}
              placeholder="Enter profession/title"
            />

            <FormTextInput
              label="C. Organization/Practice Name"
              registerName="referringHealthProfessionalDetails.organizationName"
              register={register}
              placeholder="Enter organization/practice name"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormPhoneInput
                  label="D. Preferred Contact Method (Phone)"
                  registerName="referringHealthProfessionalDetails.phoneNumber"
                  setValue={setValue}
                  phone={phone}
                  setPhone={setPhone}
                  req_star={true}
                  required={true}
                  
              />
              <FormTextInput
                label="Preferred Contact Method (Email)"
                registerName="referringHealthProfessionalDetails.email"
                register={register}
                placeholder="Email"
                type="email"
                required={true}
                req_star={true}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormDatePicker
              label="E. Date Of Referral:"
              registerName="referringHealthProfessionalDetails.dateOfReferral"
              control={control}
              
            />
            </div>
            
          </div>

          <div className="text-center">
          <button
              type="submit"
              className={`px-10 py-3 rounded-3xl font-bold ${
                isValid ? 'bg-maintext text-white hover:bg-primary' : 'bg-[#c4c4c4] cursor-not-allowed text-black'
              }`}
              disabled={!isValid || loading}
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>

          </div>
        </form>


  </div>
</section>
  );
};

export default ReferralsPage;
