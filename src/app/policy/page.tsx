import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Policy: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-[#f9f5f1] text-maintext">
      <div className="container mx-auto max-w-4xl">
      
        <h1 className="text-4xl font-bold text-center uppercase mb-10 font-inter">Policy</h1>

        <h2 className="text-2xl font-bold mb-1">Disclosure</h2>
        <p className="text-lg mb-1">
          Empower4U may share data with other agencies such as the local authority, funding bodies, and other voluntary agencies.
        </p>
        <p className="text-lg mb-1">
          The person will be made aware in most circumstances how and with whom their information will be shared.
        </p>
        <p className="text-lg mb-1">
          There are circumstances where the law allows Empower4U to disclose data (including sensitive data) without the data subject’s consent.
        </p>
        <p className="text-lg mb-1">These are:</p>
        
        <ul className="list-decimal list-inside space-y-2 ml-5 text-lg">
          <li>Carrying out a legal duty</li>
          <li>Protecting a person’s vital interests</li>
          <li>The person has already made the information public</li>
          <li>Conducting any legal proceedings, obtaining legal advice or defending any legal rights</li>
          <li>Monitoring for equal opportunities purposes – i.e. race, disability or religion</li>
          <li>
            Providing a confidential service where the person’s consent cannot be obtained or where it is reasonable to proceed without consent: e.g., where we would wish to avoid forcing stressed or ill participants to provide consent signatures.
          </li>
        </ul>

        <p className="text-lg mt-6">
          Empower4U regards the lawful and correct treatment of personal information as very important to successful working, and to maintaining the confidence of those with whom we deal.
        </p>
        <p className="text-lg mt-1">
          Empower4U intends to ensure that personal information is treated lawfully and correctly. To this end, Empower4U will adhere to the Principles of Data Protection, as detailed in the Data Protection Act 1998.
        </p>

        <div className="flex flex-col md:flex-row justify-center mt-10 md:space-x-4 space-y-4 md:space-y-0 ">
            <a href="/privacy-policy.pdf" download className="text-center flex items-center px-6 py-3 bg-maintext text-white rounded-md hover:bg-maintext-700 ">
                <FaDownload className="mr-2" /> Privacy Policy
            </a>
            <a href="/terms-and-conditions.pdf" download className="text-center flex items-center px-6 py-3 bg-maintext text-white rounded-md hover:bg-maintext-700">
                <FaDownload className="mr-2" /> Terms and Condition
            </a>
        </div>

        

      </div>
    </section>
  );
};

export default Policy;
