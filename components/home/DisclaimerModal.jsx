"use client";

import { useState, useEffect } from "react";

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already agreed in this session
    const hasAgreed = sessionStorage.getItem("disclaimerAgreed");
    
    if (!hasAgreed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAgree = () => {
    setIsOpen(false);
    sessionStorage.setItem("disclaimerAgreed", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex justify-center bg-primary-700 text-white rounded-t-xl">
            <div className="text-center">
                <h2 className="text-xl font-serif font-bold tracking-wide">DISCLAIMER</h2>
                <p className="text-primary-200 text-xs mt-1 uppercase tracking-widest">AKT Law Offices</p>
            </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 text-gray-700 text-sm md:text-base leading-relaxed space-y-4">
          <p>
            The rules of the Bar Council of India prohibit law firms from soliciting work or advertising in any manner. By clicking on &apos;I AGREE&apos;, the user acknowledges that:
          </p>
          
          <ul className="list-disc pl-5 space-y-3 marker:text-primary-600">
            <li>
              The user wishes to gain more information about <strong>AKT Law Offices</strong>, its practice areas and its attorneys, for his/her own information and use.
            </li>
            <li>
              The information is made available/provided to the user only on his/her specific request and any information obtained or material downloaded from this website is completely at the user&apos;s volition and any transmission, receipt or use of this site is not intended to, and will not, create any lawyer-client relationship.
            </li>
            <li>
              None of the information contained on the website is in the nature of a legal opinion or otherwise amounts to any legal advice.
            </li>
            <li>
              <strong>AKT Law Offices</strong> is not liable for any consequence of any action taken by the user relying on material/information provided under this website. In cases where the user has any legal issues, he/she in all cases must seek independent legal advice.
            </li>
          </ul>
        </div>

        {/* Footer / Actions */}
        <div className="p-6 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row gap-4 justify-center rounded-b-xl">
          <button 
            onClick={handleAgree}
            className="px-8 py-3 bg-primary-700 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
          >
            I AGREE
          </button>
          <button 
             onClick={() => window.history.back()}
             className="px-8 py-3 bg-white text-gray-700 border border-gray-300 font-bold rounded-lg hover:bg-gray-100 transition-colors w-full sm:w-auto text-center"
          >
            I DISAGREE
          </button>
        </div>
      </div>
    </div>
  );
}
