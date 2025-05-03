import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../contextapi/index';

const MyProfile = () => {
    var { acountdata } = useContext(UserContext);
    var username = acountdata.userName;


  return (
    <div className="w-full  bg-gray-200 h-150 ">
      {/* Header */}
      <div className="bg-[#A20A3A] text-white p-4">
        <h1 className="text-xl font-bold">My Profile</h1>
        <p className="text-sm opacity-90">Details as per Bank Records</p>
      </div>

      {/* Profile Details */}
      <div className="max-w-3xl mx-auto p-4 h-130 overflow-y-scroll ">
        <div className="bg-white rounded-lg shadow-sm p-6 ">
          {/* Personal Information Section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-[#A20A3A] border-b border-gray-200 pb-2 mb-4">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DetailRow label="Name" value={username} />
              <DetailRow label="Account Number" value={acountdata.accountNumber} />
              <DetailRow label="Branch" value={acountdata.branchName} />
              <DetailRow label="Account Type" value={acountdata.accountTypeName} />
              <DetailRow label="Nationality" value="India" />
            </div>
          </div>

          {/* Nominee Information Section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-[#A20A3A] border-b border-gray-200 pb-2 mb-4">
              Nominee Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DetailRow label="Nominee Name" value={acountdata.nomineeName} />
              <DetailRow label="Nominee Relation" value={acountdata.nomineeRelation} />
            </div>
          </div>

          {/* Banking Details Section */}
          <div>
            <h2 className="text-lg font-semibold text-[#A20A3A] border-b border-gray-200 pb-2 mb-4">
              Banking Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DetailRow 
                label="Aadhaar Number" 
                value={`XXXX-XXXX-${acountdata.aadhaarNumber?.slice(-4) || 'XXXX'}`} 
              />
              <DetailRow 
                label="Card Numbers" 
                value={acountdata.cardNumbers || 'No cards issued'} 
              />
              <DetailRow label="Helpline Number" value="1800 839 3729" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable detail row component
const DetailRow = ({ label, value }) => (
  <div className="py-2">
    <p className="text-sm font-medium text-gray-500">{label}</p>
    <p className="text-gray-800 font-medium mt-1">{value || '-'}</p>
  </div>
);

export default MyProfile;