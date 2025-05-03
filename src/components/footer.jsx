import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        {/* Main footer content - stacked on mobile, side by side on larger screens */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Contact Details Section */}
          <div className="md:w-1/2">
            <h2 className="text-lg font-semibold mb-2">CONTACT DETAILS</h2>
            <p className="text-sm text-gray-600">
              Alok Nangia- Sr. Manager- IT/Ramesh Krishnan- Manager- IT<br />
              Corporate Office: Plot No 4, Sector -10 Dwarka New Delhi -110075<br />
              Application Development and Maintenance by cyfuture.cloud
            </p>
          </div>

          {/* Copyright Section - moves to bottom on mobile */}
          <div className="md:w-1/2 md:text-right">
            <div className="flex flex-col space-y-1 md:space-y-0 md:block">
              <p className="text-sm text-gray-600">
                Copyright © 2025 Tech Code Bank. All rights reserved.
              </p>
              <p className="text-sm text-gray-600 md:ml-4">
                Last Updated: 10-04-2025
              </p>
            </div>
          </div>
        </div>

        {/* Mobile-only bottom border */}
        <div className="md:hidden border-t border-gray-200 mt-4 pt-4">
          {/* You can add mobile-specific elements here if needed */}
        </div>
      </div>
    </div>
  );
};

export default Footer;