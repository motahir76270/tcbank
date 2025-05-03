// import React from 'react'

// const Loanform = () => {
//   return (
//     <div>loanform</div>
//   )
// }

// export default Loanform

import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';

const Loanform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset
  } = useForm({
    defaultValues: {
      loanAmount: 0,
      interestRate: 0,
      tenure: 0,
      loanType: ""
    }
  });

  const onSubmit = async(elemdata) => {
    try{

      console.log("Form submitted:", elemdata);
      const token =JSON.parse(localStorage.getItem('token'));
      
      const userId = JSON.parse(localStorage.getItem('userId'));
      const payload = {
        userId,
        interestRate:elemdata.interestRate,
        loanAmount:elemdata.loanAmount,
        loanType:elemdata.loanType,
        tenure:elemdata.tenure
      }
      const { data } = await axios.post('http://3.110.164.139:8080/loan/apply' , payload ,{
        headers: { 
          'Authorization': `Bearer ${token}`
        }
      } )
      console.log(data);
      const loanId = data.data.loanId;
      localStorage.setItem('loanId' , JSON.stringify(loanId));
      if(data.code == 1 ){
        toast.success(data.message);
      }else{
        toast.error('somthnig went wrong')
      }
    }catch{
      alert('eroor')
    }

    
  };

  // Watch values for real-time preview
  const loanAmount = watch("loanAmount");
  const interestRate = watch("interestRate");
  const tenure = watch("tenure");

  // Calculate estimated monthly payment
  const calculatePayment = () => {
    if (!loanAmount || !interestRate || !tenure) return 0;
    const monthlyRate = interestRate / 100 / 12;
    const months = tenure * 12;
    return (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 px-16 py-40 bg-gray-100 opacity-80 rounded-lg shadow-md">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Loan Amount Field */}
        <div>
          <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">
            Loan Amount (&#8377;)
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm"> &#8377; </span>
            </div>
            <input
              type="number"
              id="loanAmount"
              {...register("loanAmount", { 
                valueAsNumber: true,
                required: "Loan amount is required",
                min: {
                  value: 1000,
                  message: "Minimum loan amount is $1,000"
                },
                max: {
                  value: 1000000,
                  message: "Maximum loan amount is $1,000,000"
                }
              })}
              className={`block w-full pl-7 pr-12 py-2 border ${errors.loanAmount ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} rounded-md shadow-sm placeholder-gray-400`}
              placeholder="10,000"
              step="100"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">INR</span>
            </div>
          </div>
          {errors.loanAmount && (
            <p className="mt-1 text-sm text-red-600">{errors.loanAmount.message}</p>
          )}
        </div>

        {/* Interest Rate Field */}
        <div>
          <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700">
            Interest Rate (%)
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              id="interestRate"
              {...register("interestRate", { 
                valueAsNumber: true,
                required: "Interest rate is required",
                min: {
                  value: 0.1,
                  message: "Minimum interest rate is 0.1%"
                },
                max: {
                  value: 30,
                  message: "Maximum interest rate is 30%"
                }
              })}
              className={`block w-full pl-3 pr-12 py-2 border ${errors.interestRate ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} rounded-md shadow-sm placeholder-gray-400`}
              placeholder="5.5"
              step="0.1"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">%</span>
            </div>
          </div>
          {errors.interestRate && (
            <p className="mt-1 text-sm text-red-600">{errors.interestRate.message}</p>
          )}
        </div>

        {/* Tenure Field */}
        <div>
          <label htmlFor="tenure" className="block text-sm font-medium text-gray-700">
            Loan Term (years)
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              id="tenure"
              {...register("tenure", { 
                valueAsNumber: true,
                required: "Loan term is required",
                min: {
                  value: 1,
                  message: "Minimum tenure is 1 year"
                },
                max: {
                  value: 30,
                  message: "Maximum tenure is 30 years"
                }
              })}
              className={`block w-full pl-3 pr-12 py-2 border ${errors.tenure ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} rounded-md shadow-sm placeholder-gray-400`}
              placeholder="5"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">years</span>
            </div>
          </div>
          {errors.tenure && (
            <p className="mt-1 text-sm text-red-600">{errors.tenure.message}</p>
          )}
        </div>

        {/* Loan Type Field */}
        <div>
          <label htmlFor="loanType" className="block text-sm font-medium text-gray-700">
            Loan Type
          </label>
          <select
            id="loanType"
            {...register("loanType", { 
              required: "Please select a loan type"
            })}
            className={`mt-1 block w-full pl-3 pr-10 py-2 text-base ${errors.loanType ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} focus:outline-none rounded-md shadow-sm`}
          >
            <option value="">Select loan type</option>
            <option value="personal">Personal Loan</option>
            <option value="mortgage">Mortgage</option>
            <option value="auto">Auto Loan</option>
            <option value="student">Student Loan</option>
            <option value="business">Business Loan</option>
          </select>
          {errors.loanType && (
            <p className="mt-1 text-sm text-red-600">{errors.loanType.message}</p>
          )}
        </div>
      </div>

      {/* Preview Section */}
      <div className="bg-gray-200 p-4 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-3">Estimated Payment</h3>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-sm text-gray-500">Loan Amount</p>
            <p className="text-md font-semibold">&#8377; {loanAmount?.toLocaleString() || '0'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Interest Rate</p>
            <p className="text-md font-semibold">{interestRate || '0'}%</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Loan Term</p>
            <p className="text-md font-semibold">{tenure || '0'} years</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Monthly Payment</p>
            <p className="text-md font-semibold text-blue-600">
              &#8377; {calculatePayment().toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Reset
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Calculating...' : 'Apply Loan'}
        </button>
      </div>
    </form>
  );
};

export default Loanform;