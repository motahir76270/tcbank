import { useState ,useContext} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { UserContext } from '../contextapi/index'

const Creditapply = () => {
 const { id } = useParams();

 const  { setCreditdetails }  = useContext(UserContext);

  const [formData, setFormData] = useState({
    userId: '',
    annualIncome: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'annualIncome' ? parseFloat(value) || "" : value
    }));
    
    // Clear errors when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.userId.trim()) {
      newErrors.userId = 'User ID is required';
    } else if (formData.userId.length < 3) {
      newErrors.userId = 'User ID must be at least 3 characters';
    }
    
    if (formData.annualIncome < 0) {
      newErrors.annualIncome = 'Income cannot be negative';
    } else if (formData.annualIncome > 1000000000) {
      newErrors.annualIncome = 'Income seems unrealistically high';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);false
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setSuccess('hello');

    const token = JSON.parse(localStorage.getItem('token'));
    const payload = {
       creditCardId : id,
       userId: formData.userId,
       annualIncome: formData.annualIncome
    } 

    const  {data}  = await axios.post('http://3.110.164.139:8080/creditCard/apply',payload,
      {
        headers: { 
          'Authorization': `Bearer ${token}`,
        }
      });
      console.log(data);
      const creditdata = data.data ;
      setCreditdetails(creditdata);
      
      if( data.message == "Credit card application submitted successfully."){
         localStorage.setItem('crditdetail' , JSON.stringify(data.data));
         toast.success("Your card is apply successful")
         // Reset form after successful submission
         setTimeout(() => {
             setFormData({ userId: '', annualIncome: 0 });
             setSuccess(true);
            }, 3000);
creditdata
          }else{
            toast.error('Enter valid userId')
          }
        
      } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col justify-center py-30 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          APPLY YOUR CARD  
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Please provide your user ID and annual income
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          { (success == true) && (
            <div className="mb-4 rounded-md bg-green-50 p-4 px-16">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">
                    Your card apply successfully!
                  </p>
                </div>
              </div>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
                User ID
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  id="userId"
                  name="userId"
                  type="text"
                  value={formData.userId}
                  onChange={handleChange}
                  className={`block w-full pl-10 pr-3 py-2 border ${errors.userId ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500' : 'border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500'} rounded-md shadow-sm`}
                  placeholder="john_doe"
                />
              </div>
              {errors.userId && (
                <p className="mt-2 text-sm text-red-600">{errors.userId}</p>
              )}
            </div>

            <div>
              <label htmlFor="annualIncome" className="block text-sm font-medium text-gray-700">
                Annual Income
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">Rs</span>
                </div>
                <input
                  id="annualIncome"
                  name="annualIncome"
                  type="number"
                  step="0.01"
                  value={formData.annualIncome}
                  onChange={handleChange}
                  className={`block w-full pl-7 pr-12 py-2 border ${errors.annualIncome ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500' : 'border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500'} rounded-md shadow-sm`}
                  placeholder="0.00"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">INR</span>
                </div>
              </div>
              {errors.annualIncome && (
                <p className="mt-2 text-sm text-red-600">{errors.annualIncome}</p>
              )}
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I confirm this information is accurate
              </label>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Creditapply;



