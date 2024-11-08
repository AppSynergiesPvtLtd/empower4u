"use client";
import React from 'react';
import Image from 'next/image';
import { useForm, Controller  } from 'react-hook-form';
import axios from 'axios';
import { FaUpload } from 'react-icons/fa';
import LabeledInput from '@/components/LabeledInput';
import dynamic from 'next/dynamic';
import 'react-phone-input-2/lib/style.css';

const PhoneInput = dynamic(() => import('react-phone-input-2'), { ssr: false });

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

const ReferralsPage = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const payload = {
      reasonsForReferrals: data.reasonsForReferrals,
      therapyInputs: data.therapyInputs,
      goals: data.goals,
      specialtyNeuro: data.specialtyNeuro,
      fallsBalance: data.fallsBalance,
      surgeryDetails: data.surgeryDetails,
      fractureJointHealth: data.fractureJointHealth,
      mentalHealthCondition: data.mentalHealthCondition,
      functionalStatus: {
        mobility: data.functionalStatus.mobility,
        ADLs: data.functionalStatus.ADLs,
      },
      medicalHistory: {
        diagnosedCondition: data.medicalHistory.diagnosedCondition,
        relevantMedicalHistory: data.medicalHistory.relevantMedicalHistory,
      },
      currentMedications: data.currentMedications,
      clientInfo: {
        name: data.clientInfo.name,
        dob: data.clientInfo.dob,
        address: data.clientInfo.address,
        phoneNumber: data.clientInfo.phoneNumber,
        email: data.clientInfo.email,
        emergencyContactName: data.clientInfo.emergencyContactName,
        emergencyContactNumber: data.clientInfo.emergencyContactNumber,
      },
      additionalInfo: {
        hasCaregiver: data.additionalInfo.hasCaregiver,
        specialHomeConsiderations: data.additionalInfo.specialHomeConsiderations,
        otherNotes: data.additionalInfo.otherNotes,
      },
      consentProvided: data.consentProvided,
      referringHealthProfessionalDetails: {
        name: data.referringHealthProfessionalDetails.name,
        profession: data.referringHealthProfessionalDetails.profession,
        organizationName: data.referringHealthProfessionalDetails.organizationName,
        preferredCommunicationMode: data.referringHealthProfessionalDetails.preferredCommunicationMode,
        phoneNumber: data.referringHealthProfessionalDetails.phoneNumber,
        email: data.referringHealthProfessionalDetails.email,
        signature: data.referringHealthProfessionalDetails.signature,
        consentDate: data.referringHealthProfessionalDetails.consentDate,
        dateOfReferral: data.referringHealthProfessionalDetails.dateOfReferral,
      },
    };

    try {
      const response = await axios.post(
        'https://us-central1-empower4u-31c1a.cloudfunctions.net/RefferalFormApi/create-referral',
        payload
      );
      router.push('/success');
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="py-16 px-4 bg-[#f9f5f1] text-maintext">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-center mb-6">
          <Image src="/icons/top_border.svg" alt="Top Border" width={600} height={400} />
        </div>
        <h1 className="text-4xl font-bold text-center uppercase font-inter my-4">Referrals</h1>
        <div className="flex justify-center mb-12">
          <Image src="/icons/bottom_border.svg" alt="Bottom Border" width={600} height={400} />
        </div>

        <div className="flex justify-center mb-12">
          <Image
            src="/images/for-professionals/referral-page.webp"
            alt="referral-page"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <h2 className="text-xl font-bold font-inter">1. Reasons for Referrals <span className="text-red-700"> *</span></h2>
            <textarea {...register("reasonsForReferrals")} className="w-full p-2 border border-maintext rounded mt-2" placeholder="Write reasons for referrals" required />
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold font-inter">2. Summary of Therapy Inputs <span className="text-red-700"> *</span></h2>
            <textarea {...register("therapyInputs")} className="w-full p-2 border border-maintext rounded mt-2" placeholder="Write summary of therapy inputs" required />
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold font-inter">3. Goals <span className="text-red-700"> *</span></h2>
            <textarea {...register("goals")} className="w-full p-2 border border-maintext rounded mt-2" placeholder="Write your goals" required />
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold font-inter">4. Specialty You Refer To <span className="text-red-700"> *</span></h2>

            <h3 className="text-lg font-semibold mt-4 mb-2"><span className="font-bold mr-2">A.</span> Neuro</h3>
            <div className="ml-4">
              <div className="space-y-2">
                {['Stroke Vestibular Disorder', "Parkinson's Disease", 'Spinal Cord Injury', 'Multiple Sclerosis', 'Guillain-Barre Syndrome', 'Rare Neurological Conditions', 'Others'].map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <input type="radio" value={option} {...register("specialtyNeuro")} className="mt-1" />
                    <label htmlFor={option} className="text-base font-medium text-maintext">{option}</label>
                  </div>
                ))}
              </div>
              <LabeledInput label="Enter specialty you refer to neuro" placeholder="Enter specialty you refer to neuro" labelPrefix="" name="specialtyNeuro" {...register("specialtyNeuro")} />
            </div>

            <h3 className="text-lg font-semibold mt-4 mb-2"><span className="font-bold mr-2">B.</span> Falls/Balance</h3>
            <LabeledInput label="Number of Falls in the Last 3 Months" placeholder="Enter no. of falls" labelPrefix="" name="fallsBalance" type="number" {...register("fallsBalance")} />

            <h3 className="text-lg font-semibold mt-4 mb-2"><span className="font-bold mr-2">C.</span> Surgery Prehab/Rehab</h3>
            <LabeledInput label="Specify the (Planned) Surgery" placeholder="Specify the (Planned) Surgery" labelPrefix="" name="surgeryDetails" {...register("surgeryDetails")} />

            <h3 className="text-lg font-semibold mt-4 mb-2"><span className="font-bold mr-2">D.</span> Fracture/Joint Health/Amputee</h3>
            <LabeledInput label="Specify Involved Joint(s)" placeholder="Specify Involved Joint(s)" labelPrefix="" name="fractureJointHealth" {...register("fractureJointHealth")} />

            <h3 className="text-lg font-semibold mt-4 mb-2"><span className="font-bold mr-2">E.</span> Mental Health</h3>
            <LabeledInput label="Specify diagnosed condition" placeholder="Specify diagnosed condition" labelPrefix="" name="mentalHealthCondition" {...register("mentalHealthCondition")} />
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold font-inter">5. Functional Status <span className="text-red-700"> *</span></h2>
            <LabeledInput label="Mobility:" placeholder="Enter Mobility" labelPrefix="" name="functionalStatus.mobility" {...register("functionalStatus.mobility")} />
            <LabeledInput label="ADLs:" placeholder="Enter ADLs" labelPrefix="" name="functionalStatus.ADLs" {...register("functionalStatus.ADLs")} />
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold font-inter">6. Medical History and Current Condition</h2>
            <LabeledInput label="Specify Diagnosed Condition:" placeholder="Specify diagnosed condition" labelPrefix="A." name="medicalHistory.diagnosedCondition" {...register("medicalHistory.diagnosedCondition")} />
            <LabeledInput label="Relevant Medical History:" placeholder="Specify relevant medical history" labelPrefix="B." name="medicalHistory.relevantMedicalHistory" {...register("medicalHistory.relevantMedicalHistory")} />
            <LabeledInput label="Current Medications:" placeholder="Specify current medications" labelPrefix="C." name="currentMedications" {...register("currentMedications")} />
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold font-inter">7. Client Information</h2>
            <LabeledInput label="Patient Full Name" placeholder="Patient Full Name" labelPrefix="" name="clientInfo.name" {...register("clientInfo.name")} />
            <LabeledInput label="Date of Birth" placeholder="Date of Birth" labelPrefix="" name="clientInfo.dob" type="date" {...register("clientInfo.dob")} />
            <LabeledInput label="Phone Number" placeholder="Phone Number" labelPrefix="" name="clientInfo.phoneNumber" type="tel" {...register("clientInfo.phoneNumber")} />
            <LabeledInput label="Email Address" placeholder="Email Address" labelPrefix="" name="clientInfo.email" type="email" {...register("clientInfo.email")} />
            <LabeledInput label="Address" placeholder="Address" labelPrefix="" name="clientInfo.address" {...register("clientInfo.address")} />
            <LabeledInput label="Emergency Contact Name" placeholder="Emergency Contact Name" labelPrefix="" name="clientInfo.emergencyContactName" {...register("clientInfo.emergencyContactName")} />
            <LabeledInput label="Emergency Contact Phone" placeholder="Emergency Contact Phone" labelPrefix="" name="clientInfo.emergencyContactNumber" {...register("clientInfo.emergencyContactNumber")} />
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold font-inter">8. Additional Information</h2>
            <LabeledInput label="Does the Patient Have A Caregiver?" placeholder="Yes or No" labelPrefix="A." name="additionalInfo.hasCaregiver" {...register("additionalInfo.hasCaregiver")} />
            <LabeledInput label="Any Special Home Considerations?" placeholder="Specify any special home considerations" labelPrefix="B." name="additionalInfo.specialHomeConsiderations" {...register("additionalInfo.specialHomeConsiderations")} />
            <LabeledInput label="Other Notes/Additional Information:" placeholder="Other additional information" labelPrefix="C." name="additionalInfo.otherNotes" {...register("additionalInfo.otherNotes")} />
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold font-inter">9. Consent and Privacy <span className="text-red-700"> *</span></h2>
            <label className="flex items-start space-x-2 mt-4">
              <input type="checkbox" {...register("consentProvided")} className="mt-1" required />
              <span>I confirm that I have discussed this referral with the patient and obtained their consent.</span>
            </label>
            <LabeledInput label="Referring Health Professional Signature:" placeholder="Upload Signature" labelPrefix="" name="referringHealthProfessionalDetails.signature" type="file" {...register("referringHealthProfessionalDetails.signature")} />
            <LabeledInput label="Date:" placeholder="Date" labelPrefix="" name="referringHealthProfessionalDetails.consentDate" type="date" {...register("referringHealthProfessionalDetails.consentDate")} />
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold font-inter">10. Referring Health Professional Details</h2>
            <LabeledInput label="Health Professional Name" placeholder="Enter health professional name" labelPrefix="A." name="referringHealthProfessionalDetails.name" {...register("referringHealthProfessionalDetails.name")} />
            <LabeledInput label="Profession/Title" placeholder="Enter profession/title" labelPrefix="B." name="referringHealthProfessionalDetails.profession" {...register("referringHealthProfessionalDetails.profession")} />
            <LabeledInput label="Organization/Practice Name" placeholder="Enter organization/practice name" labelPrefix="C." name="referringHealthProfessionalDetails.organizationName" {...register("referringHealthProfessionalDetails.organizationName")} />
            <LabeledInput label="Preferred Contact Method (Phone)" placeholder="Phone" labelPrefix="D." name="referringHealthProfessionalDetails.phoneNumber" type="tel" {...register("referringHealthProfessionalDetails.phoneNumber")} />
            <LabeledInput label="Preferred Contact Method (Email)" placeholder="Email" labelPrefix="" name="referringHealthProfessionalDetails.email" type="email" {...register("referringHealthProfessionalDetails.email")} />
            <LabeledInput label="Date Of Referral:" placeholder="Date" labelPrefix="E." name="referringHealthProfessionalDetails.dateOfReferral" type="date" {...register("referringHealthProfessionalDetails.dateOfReferral")} />
          </div>

          <div className="text-center">
            <button type="submit" className="px-8 py-3 bg-maintext text-white rounded-md hover:bg-maintext-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReferralsPage;
