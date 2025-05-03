import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Creditapp = () => {
  const [creditApplications, setCreditApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCreditApplications = async () => {
    const token = JSON.parse(localStorage.getItem('token'));
    try {
      const { data } = await axios.get(`http://3.110.164.139:8080/manager/credit-card-app`, {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
      });
      console.log(data.data)
      if (data.code === 1) {
        setCreditApplications(data.data);
      } else {
        setError(data.message || 'Failed to fetch credit applications');
      }
    } catch (error) {
      setError(error.message || 'An error occurred while fetching applications');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCreditApplications();
  }, []);

  const getStatusBadge = (status) => {
    const statusClasses = {
      'PENDING': 'bg-yellow-100 text-yellow-800',
      'APPROVED': 'bg-green-100 text-green-800',
      'REJECTED': 'bg-red-100 text-red-800',
      'UNDER_REVIEW': 'bg-blue-100 text-blue-800'
    };
    
    const baseClass = 'px-3 py-1 rounded-full text-xs font-semibold';
    const statusClass = statusClasses[status] || 'bg-gray-100 text-gray-800';
    
    return (
      <span className={`${baseClass} ${statusClass}`}>
        {status.replace('_', ' ')}
      </span>
    );
  };

  const getCardTypeBadge = (cardType) => {
    const cardTypeClasses = {
      'GOLD': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'PLATINUM': 'bg-gray-100 text-gray-800 border-gray-200',
      'SILVER': 'bg-gray-200 text-gray-800 border-gray-300',
      'STANDARD': 'bg-blue-100 text-blue-800 border-blue-200'
    };
    
    const baseClass = 'px-3 py-1 rounded-full text-xs font-semibold border';
    const cardTypeClass = cardTypeClasses[cardType] || 'bg-gray-100 text-gray-800 border-gray-200';
    
    return (
      <span className={`${baseClass} ${cardTypeClass}`}>
        {cardType}
      </span>
    );
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-bold text-gray-900">Credit Card Applications</h1>
          <p className="mt-2 text-sm text-gray-600">
            Review and manage all pending credit card applications
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Export Applications
          </button>
        </div>
      </div>

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-y-scroll h-110 shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50 ">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Application ID
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Card Type
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Annual Income
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Message
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white ">
                  {creditApplications.length > 0 ? (
                    creditApplications.map((application) => (
                      <tr key={application.applicationId} className="hover:bg-gray-50">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          #{application.applicationId}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {getCardTypeBadge(application.cardType)}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {formatCurrency(application.annualIncome)}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {getStatusBadge(application.status)}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 max-w-xs truncate" title={application.message}>
                          {application.message || 'No message provided'}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                            Review
                          </button>
                          <button className="text-gray-400 hover:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="py-4 text-center text-sm text-gray-500">
                        No credit applications found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creditapp;