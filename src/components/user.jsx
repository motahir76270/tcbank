import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../contextapi/index';

const User = () => {
  var { userdata } = useContext(UserContext);
  var  username = [userdata.name]

  return (
    <div className="min-h-screen bg-gray-50 py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#A20A3A] to-[#D62246] p-6 text-white">
            <h1 className="text-2xl font-bold">User Profile</h1>
            <p className="opacity-90">Personal information</p>
          </div>
          
          {/* User Details Section */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Profile Picture Placeholder */}
              <div className="md:col-span-2 flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>

              {/* User Details */}
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                  <p className="mt-1 text-lg font-semibold text-gray-900">{username[0].toString().toUpperCase() || 'Not provided'}</p>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="text-sm font-medium text-gray-500">Email Address</h3>
                  <p className="mt-1 text-lg font-semibold text-gray-900 break-all">{userdata.email || 'Not provided'}</p>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="text-sm font-medium text-gray-500">Country</h3>
                  <p className="mt-1 text-lg font-semibold text-gray-900">{'India'}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-sm font-medium text-gray-500">Date of Birth</h3>
                  <p className="mt-1 text-lg font-semibold text-gray-900">{userdata.dob || 'Not provided'}</p>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="text-sm font-medium text-gray-500">Gender</h3>
                  <p className="mt-1 text-lg font-semibold text-gray-900 capitalize">{userdata.gender || 'Not provided'}</p>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="text-sm font-medium text-gray-500">Phone Number</h3>
                  <p className="mt-1 text-lg font-semibold text-gray-900">{userdata.phone || 'Not provided'}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer Actions (optional) */}
          <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3">
            <button className="px-4 py-2 text-sm text-[#A20A3A] font-medium rounded-md hover:bg-[#A20A3A] hover:text-white transition-colors border border-[#A20A3A]">
              Edit Profile
            </button>
            <button className="px-4 py-2 bg-[#A20A3A] text-sm text-white font-medium rounded-md hover:bg-[#8A0932] transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;