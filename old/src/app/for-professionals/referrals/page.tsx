"use client";

import Image from 'next/image';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Toaster, toast } from 'react-hot-toast';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import React, { useRef, useState } from 'react';
import { FaUpload } from 'react-icons/fa';

interface FormData {
  reasonsForReferrals: string;
  therapyInputs: string;
  goals: string;
  specialtyNeuro: string;
  fallsBalance: string;
  surgeryDetails: string;
  fractureJointHealth: string;
  mentalHealthCondition: string;
  functionalStatus: {
    mobility: string;
    ADLs: string;
  };
  medicalHistory: {
    diagnosedCondition: string;
    relevantMedicalHistory: string;
  };
  currentMedications: string;
  clientInfo: {
    name: string;
    dob: string;
    address: string;
    phoneNumber: string;
    email: string;
    emergencyContactName: string;
    emergencyContactNumber: string;
  };
  additionalInfo: {
    hasCaregiver: string;
    specialHomeConsiderations: string;
    otherNotes: string;
  };
  consentProvided: boolean;
  referringHealthProfessionalDetails: {
    name: string;
    profession: string;
    organizationName: string;
    preferredCommunicationMode: string;
    phoneNumber: string;
    email: string;
    signature: string;
    consentDate: string;
    dateOfReferral: string;
  };
}



// Reusable Input Components
const FormTextInput = ({ label, registerName, register, placeholder, type = 'text', required = false }) => (
  <div className="mb-4">
    <label className="block font-medium text-maintext">{label}</label>
    <input
      type={type}
      {...register(registerName)}
      placeholder={placeholder}
      required={required}
      className="w-full p-2 border border-gray-300 rounded mt-2 bg-transparent"
    />
  </div>
);



const FormFileInput = ({ label, registerName, register, required = false }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (inputRef.current) { 
      inputRef.current.click();
    }
  };

  return (
    <div className="mb-6">
    <div className="flex items-center ml-2">
      <label className="block font-medium text-maintext mb-2">{label}</label>
      <div
        onClick={handleClick}
        className="ml-8 w-32 h-8 border-2 border-dashed border-maintext flex justify-center items-center cursor-pointer rounded-md hover:bg-purple-100"
      >
        <FaUpload className="text-maintext text-xl" />
        <input
          ref={inputRef}
          type="file"
          {...register(registerName)}
          required={required}
          className="hidden"
        />
      </div>
      </div>
    </div>
  );
};

const FormTextArea = ({ label, registerName, register, placeholder, required = false }) => (
  <div className="mb-6">
    <label className="text-xl font-bold font-inter">{label}</label>
    <textarea
      {...register(registerName)}
      placeholder={placeholder}
      required={required}
      className="w-full p-2 bg-transparent border border-gray-300 rounded mt-2"
    />
  </div>
);

const FormRadioGroup = ({ label, options, registerName, register, required = false }) => (
  <div className="mb-6">
  <div className="flex items-center space-x-4 mt-2">
    <label className="block font-medium text-maintext mb-2 flex items-center">{label}</label>
    <div className="flex space-x-4 ml-4">
      {options.map((option, index) => (
        <div key={index} className="flex items-center space-x-2">
          <input
            type="radio"
            value={option}
            {...register(registerName)}
            required={required}
            className="mt-0.5"
          />
          <label className="text-base font-medium text-maintext">{option}</label>
        </div>
      ))}
    </div>
  </div>
</div>
);

const FormPhoneInput = ({ label, registerName, setValue, phone, setPhone, required = false }) => (
  <div className="mb-4">
    <label className="block font-medium text-maintext mb-2">{label}</label>
    <PhoneInput
      country="in"
      value={phone}
      
      onChange={(value) => {
        setPhone(value);   
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
  </div>
);

const ReferralsPage = () => {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const { register, watch, handleSubmit, formState: { isValid }, setValue } = useForm<FormData>({
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
      referringHealthProfessionalDetails: { name: "", profession: "", organizationName: "", preferredCommunicationMode: "", phoneNumber: "", email: "", signature: "", consentDate: "", dateOfReferral: "" },
    },
  });

  const signatureFile = watch("referringHealthProfessionalDetails.signature");


  const onSubmit = async (data: FormData) => {
    // if (!signatureFile?.length) {
    //   toast.error("Signature file is required.");
    //   return;
    // }
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
    }
  };

  return (
    <section className="py-16 px-4 bg-[#f9f5f1] text-maintext">
      <div className="container mx-auto max-w-4xl">
        <Toaster />
        <div className="flex justify-center mb-6">
          <Image src="/icons/top_border.svg" alt="Top Border" width={600} height={400} />
        </div>
        <h1 className="text-4xl font-bold text-center uppercase font-inter my-4">Referrals</h1>
        <div className="flex justify-center mb-12">
          <Image src="/icons/bottom_border.svg" alt="Bottom Border" width={600} height={400} />
        </div>

        <div className="flex justify-center mb-12">
          <Image src="/images/for-professionals/referral-page.webp" alt="referral-page" width={400} height={300} className="rounded-lg shadow-md" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <h2 className="text-xl font-bold font-inter">1. Reasons for Referrals <span className="text-red-700"> *</span></h2>
            <FormTextArea
                        label=""
                        registerName="reasonsForReferrals"
                        register={register}
                        placeholder="Write reasons for referrals"
                        required
                      />          
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold font-inter">2. Summary of Therapy Inputs <span className="text-red-700"> *</span></h2>
            <FormTextArea
            label=""
            registerName="therapyInputs"
            register={register}
            placeholder="Write summary of therapy inputs"
            required
          />
            {/* <textarea {...register("therapyInputs")} className="w-full p-2 border bg-transparent border-gray-300 rounded mt-2" placeholder="Write summary of therapy inputs" required /> */}
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold font-inter">3. Goals <span className="text-red-700"> *</span></h2>
            <FormTextArea
            label=""
            registerName="goals"
            register={register}
            placeholder="Write your goals"
            required
          />
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-bold font-inter">4. Specialty You Refer To <span className="text-red-700"> *</span></h2>

            <h3 className="text-lg font-semibold mt-4 mb-2"><span className="font-bold mr-2">A.</span> Neuro</h3>
            <div className="ml-4">
              <div className="space-y-2">
                {['Stroke Vestibular Disorder', "Parkinson's Disease", 'Spinal Cord Injury', 'Multiple Sclerosis', 'Guillain-Barre Syndrome', 'Rare Neurological Conditions', 'Others'].map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <input
                  type="radio"
                  value={option}
                  {...register("specialtyNeuro")}
                  className="mt-1"
                  required
                />
                <label className="text-base font-medium text-maintext">{option}</label>
                  </div>
                ))}
              </div>
              <FormTextInput
              label="Enter specialty you refer to neuro"
              registerName="specialtyNeuro"
              register={register}
              placeholder="Enter specialty you refer to neuro"
              required
            />
            </div>
          </div>

            <h3 className="text-lg font-semibold mt-4 mb-2"><span className="font-bold mr-2">B.</span> Falls/Balance</h3>
            <FormTextInput
            label="Number of Falls in the Last 3 Months"
            registerName="fallsBalance"
            register={register}
            placeholder="Enter number of falls"
            type="number"
            required
          />
            <h3 className="text-lg font-semibold mt-4 mb-2"><span className="font-bold mr-2">C.</span> Surgery Prehab/Rehab</h3>
            <FormTextInput
            label="Specify the (Planned) Surgery"
            registerName="surgeryDetails"
            register={register}
            placeholder="Specify the (Planned) Surgery"
            required
          />

            <h3 className="text-lg font-semibold mt-4 mb-2"><span className="font-bold mr-2">D.</span> Fracture/Joint Health/Amputee</h3>
            <FormTextInput
            label="Specify Involved Joint(s)"
            registerName="fractureJointHealth"
            register={register}
            placeholder="Specify Involved Joint(s)"
            required
          />

            <h3 className="text-lg font-semibold mt-4 mb-2"><span className="font-bold mr-2">E.</span> Mental Health</h3>
            <FormTextInput
            label="Specify diagnosed condition"
            registerName="mentalHealthCondition"
            register={register}
            placeholder="Specify diagnosed condition"
            required
          /> 
          
          <div className="mb-6">
            <h2 className="text-xl font-bold font-inter">5. Functional Status <span className="text-red-700"> *</span></h2>
            <label className="text-base font-medium text-maintext block mt-1"> Please provide information about the patient's current functional abilities:</label>
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
            <h2 className="text-xl font-bold font-inter">6. Medical History and Current Condition</h2>
            <FormTextInput
            label="Specify Diagnosed Condition"
            registerName="medicalHistory.diagnosedCondition"
            register={register}
            placeholder="Specify diagnosed condition"
          />
            <FormTextInput
            label="Relevant Medical History"
            registerName="medicalHistory.relevantMedicalHistory"
            register={register}
            placeholder="Specify relevant medical history"
          />
          <FormTextInput
            label="Current Medications"
            registerName="currentMedications"
            register={register}
            placeholder="Specify current medications"
          />
          </div>


          <div className="mb-6">
            <h2 className="text-xl font-bold font-inter">7. Client Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormTextInput
                label="A. Patient Full Name"
                registerName="clientInfo.name"
                register={register}
                placeholder="Patient Full Name"
              />
              
              <FormTextInput
                label="B. Date Of Birth"
                registerName="clientInfo.dob"
                register={register}
                placeholder="Date of Birth"
                type="date"
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
              />
            </div>
              <FormTextInput 
                label="E. Address" 
                placeholder="Address" 
                registerName="clientInfo.address" 
                register={register} 
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormTextInput 
                  label="F. Emergency Contact Name" 
                  placeholder="Emergency Contact Name" 
                  registerName="clientInfo.emergencyContactName" 
                  register={register} 
                />

                <FormPhoneInput
                label="G. Emergency Contact Phone"
                registerName="clientInfo.emergencyContactNumber"
                setValue={setValue}
                phone={phone}
                setPhone={setPhone}
                required
              />
                
              </div>
          </div>


          <div className="mb-6">
            <h2 className="text-xl font-bold font-inter">8. Additional Information</h2>
            <FormRadioGroup
              label="Does the Patient Have A Caregiver/Family Member to Assist?"
              options={["Yes", "No"]}
              registerName="additionalInfo.hasCaregiver"
              register={register}
              required
            />
            <FormTextInput label="B. Any Special Home Considerations?" placeholder="Any special home considerations (e.g., stairs, narrow hallways, behavioural issues)?" register={register} registerName={"additionalInfo.specialHomeConsiderations"} />
            <FormTextInput label="C. Other Notes/Additional Information:" placeholder="Other Notes/Additional Information:"  register={register} registerName={"additionalInfo.otherNotes"} />
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold font-inter">9. Consent and Privacy <span className="text-red-700"> *</span></h2>
            <label className="flex items-start space-x-2 my-4">
              <input type="checkbox" {...register("consentProvided")} className="mt-1" required />
              <span>I confirm that I have discussed this referral with the patient and obtained their consent to share their personal health information for the purpose of arranging home-based physiotherapy services with Empower4U.</span>
            </label>

            <FormFileInput
              label="Referring Health Professional Signature"
              registerName="referringHealthProfessionalDetails.signature"
              register={register}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormTextInput
                label="Date:"
                registerName="referringHealthProfessionalDetails.consentDate"
                register={register}
                placeholder="Select Date"
                type="date"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold font-inter">10. Referring Health Professional Details</h2>
            <FormTextInput
              label="A. Health Professional Name"
              registerName="referringHealthProfessionalDetails.name"
              register={register}
              placeholder="Enter health professional name"
              required
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
              <FormTextInput
                label="D. Preferred Contact Method (Phone)"
                registerName="referringHealthProfessionalDetails.phoneNumber"
                register={register}
                placeholder="Phone"
                type="tel"
                required
              />

              <FormTextInput
                label="Preferred Contact Method (Email)"
                registerName="referringHealthProfessionalDetails.email"
                register={register}
                placeholder="Email"
                type="email"
                required
              />
            </div>
            <FormTextInput
              label="E. Date Of Referral:"
              registerName="referringHealthProfessionalDetails.dateOfReferral"
              register={register}
              placeholder="Date"
              type="date"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              // className={px-8 py-3 rounded-md ${isValid ? 'bg-maintext text-white' : 'bg-gray-400 cursor-not-allowed'}}
              className={'px-10 py-3 rounded-3xl hover:bg-maintext hover:text-white bg-gray-400 text-black font-bold'}
              // disabled={!isValid}
            >
              Submit
            </button>
          </div>
        </form>


  </div>
</section>
  );
};

export default ReferralsPage;
