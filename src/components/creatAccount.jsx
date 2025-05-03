import axios from 'axios';
import { useEffect ,useState  } from 'react';
import { useForm } from 'react-hook-form';
import { useContext  } from 'react';
import { UserContext } from '../contextapi/index';
//import { toast } from 'react-toastify';
//import { useNavigate } from 'react-router-dom';


function CreatAccount() {
   var { userdata } = useContext(UserContext);
  // const navigate = useNavigate();
    const [cityId , setCityId] =useState([]);
    const [branchId , setBranchId] = useState([]);

const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
const fectchcityid = async()=> {
 const token = JSON.parse(localStorage.getItem('token'))
      var { data } = await axios.get('http://3.110.164.139:8080/city/get-all' ,{
        headers: { 
          'Authorization': `Bearer ${token}`,
        }
      });
      console.log(data.data)
      const citydata = data.data ;
      setCityId(citydata); 
   }

var fetchbranchId= async() => {
       const token = JSON.parse(localStorage.getItem('token'))
      const { data } = await axios.get('http://3.110.164.139:8080/branches/get-all' ,{
        headers: { 
          'Authorization': `Bearer ${token}`,
        }
      }); 

       //console.log(data.data)
       const branchdata = data.data ;
       setBranchId(branchdata)
    //    localStorage.setItem('branchId' ,JSON.stringify(branchId));
 } 

  useEffect( () => {
    fectchcityid();
    fetchbranchId();
    } , [])

  const onSubmit = async(e) => {
    // try{
     console.log(userdata.id)
      //const userId = userdata.id;
       console.log(e);
      // const id = userdata.id;

      const reqdata = {
      userId :userdata.id, 
      branchId: e.branchId ,
      balance : e.balance,
      aadhaarNumber : e.aadhaarNumber,
      nomineeName :e.nomineeName,
      nomineeRelation :e.nomineeRelation,
      accountTypeId :e.accountTypeId,
      debitCardRequired :e.debitCardRequired,
      netBankingEnabled : e.netBankingEnabled,
      documentType :e.documentType,
      documentNumber:e.documentNumber,
      address : {
        addressType:e.address.addressType,
        houseNumber:e.address.houseNumber,
        street:e.address.street,
        landmark:e.address.landmark,
        area :e.address.area,
        pincode:e.address.pincode,
        cityId:e.address.cityId,
      }  
    }

      
   
  
    
    const token = JSON.parse(localStorage.getItem('token'));
    const { data } = await axios.post('http://3.110.164.139:8080/account/create' ,
     reqdata
,{
      headers: { 
        'Authorization': `Bearer ${token}`,
      }
    }); 
    console.log(data)
    
  //   if(data.code == 1){
  //     toast.success('Account was sucessfully created')
  //     navigate('/al');
  //   }
  // }catch{
  //   toast.error('page not found');
  // }

   // Handle form submission here
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl py-44 ">
      {isSubmitting && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-lg">Loading...</div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Account Opening Form</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* User ID */}
             
          <div className="mb-4 hidden">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
              id
            </label>
            <input
              id="id"
              type="number"
              placeholder="id"
              value={userdata.id}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.id ? 'border-red-500' : ''
              }`}
              {...register('id')}
            />
            {errors.id && (
              <p className="text-red-500 text-xs italic">{errors.id.message}</p>
            )}
          </div>
        

          {/* Branch ID */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="branchId">
              Branch ID
            </label>

               <select
                id="branchId"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.address?.cityId ? 'border-red-500' : ''
                }`}
                {...register('branchId', {
                  required: { value: true, message: 'City is required' },
                  min: { value: 1, message: 'Please select a city' }
                })}
              >
                <option value="">Select City</option>
                {branchId.map( (city) => {
                    return (
                        <option value={city.id} key={city.id}> {city.name} </option>
                    )
                } )}
              </select>
        

            {errors.branchId && (
              <p className="text-red-500 text-xs italic">{errors.branchId.message}</p>
            )}
          </div>

          {/* Balance */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="balance">
              Initial Balance
            </label>
            <input
              id="balance"
              type="number"
              placeholder="Initial Balance"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.balance ? 'border-red-500' : ''
              }`}
              {...register('balance', {
                required: { value: true, message: 'Initial balance is required' },
                min: { value: 0, message: 'Balance cannot be negative' }
              })}
            />
            {errors.balance && (
              <p className="text-red-500 text-xs italic">{errors.balance.message}</p>
            )}
          </div>

          {/* Aadhaar Number */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="aadhaarNumber">
              Aadhaar Number
            </label>
            <input
              id="aadhaarNumber"
              type="text"
              placeholder="Aadhaar Number"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.aadhaarNumber ? 'border-red-500' : ''
              }`}
              {...register('aadhaarNumber', {
                required: { value: true, message: 'Aadhaar number is required' },
                pattern: {
                  value: /^\d{12}$/,
                  message: 'Aadhaar must be 12 digits'
                }
              })}
            />
            {errors.aadhaarNumber && (
              <p className="text-red-500 text-xs italic">{errors.aadhaarNumber.message}</p>
            )}
          </div>

          {/* Nominee Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nomineeName">
              Nominee Name
            </label>
            <input
              id="nomineeName"
              type="text"
              placeholder="Nominee Name"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.nomineeName ? 'border-red-500' : ''
              }`}
              {...register('nomineeName', {
                required: { value: true, message: 'Nominee name is required' }
              })}
            />
            {errors.nomineeName && (
              <p className="text-red-500 text-xs italic">{errors.nomineeName.message}</p>
            )}
          </div>

          {/* Nominee Relation */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nomineeRelation">
              Nominee Relation
            </label>
            <input
              id="nomineeRelation"
              type="text"
              placeholder="Nominee Relation"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.nomineeRelation ? 'border-red-500' : ''
              }`}
              {...register('nomineeRelation', {
                required: { value: true, message: 'Nominee relation is required' }
              })}
            />
            {errors.nomineeRelation && (
              <p className="text-red-500 text-xs italic">{errors.nomineeRelation.message}</p>
            )}
          </div>

          {/* Account Type */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="accountTypeId">
              Account Type
            </label>
            <select
              id="accountTypeId"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.accountTypeId ? 'border-red-500' : ''
              }`}
              {...register('accountTypeId', {
                required: { value: true, message: 'Account type is required' },
                min: { value: 1, message: 'Please select an account type' }
              })}
            >
              <option value="">Select Account Type</option>
              <option value="1">Savings</option>
              <option value="2">Current</option>
              <option value="3">Fixed Deposit</option>
            </select>
            {errors.accountTypeId && (
              <p className="text-red-500 text-xs italic">{errors.accountTypeId.message}</p>
            )}
          </div>

              {/* Documment Type */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="accountTypeId">
              Documment Type 
            </label>
            <select
              id="documentType"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.accountTypeId ? 'border-red-500' : ''
              }`}
              {...register('documentType', {
                required: { value: true, message: 'Account type is required' },
                min: { value: 1, message: 'Please select an account type' }
              })}
            >
              <option value="">Select Account Type</option>
              <option value="PAN CARD">PAN CARD</option>
              <option value="VOTER ID">VOTER ID</option>
            </select>
            {errors.documentType && (
              <p className="text-red-500 text-xs italic">{errors.documentType.message}</p>
            )}
          </div>

               {/* Document Number */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="documentType">
              Document Number
            </label>
            <input
              id="documentType"
              type="text"
              placeholder="Aadhaar Number"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.aadhaarNumber ? 'border-red-500' : ''
              }`}
              {...register('documentNumber', {
                required: { value: true, message: 'document number is required' },
                pattern: {
                  value: /^\d{12}$/,
                  message: 'documentNumber must be 12 digits'
                }
              })}
            />
            {errors.documentNumber && (
              <p className="text-red-500 text-xs italic">{errors.documentNumber.message}</p>
            )}
          </div>

          {/* Debit Card Required */}
          <div className="mb-4 flex items-center">
            <input
              id="debitCardRequired"
              type="checkbox"
              className="mr-2 leading-tight"
              {...register('debitCardRequired')}
            />
            <label className="block text-gray-700 text-sm font-bold" htmlFor="debitCardRequired">
              Debit Card Required
            </label>
          </div>

          {/* Net Banking Enabled */}
          <div className="mb-4 flex items-center">
            <input
              id="netBankingEnabled"
              type="checkbox"
              className="mr-2 leading-tight"
              {...register('netBankingEnabled')}
            />
            <label className="block text-gray-700 text-sm font-bold" htmlFor="netBankingEnabled">
              Enable Net Banking
            </label>
          </div>
        </div>

        {/* Address Section */}
        <div className="mt-6 border-t pt-4">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Address Information</h2>

           {/* pernament Address */}
           <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="accountTypeId">
              pernament Address 
            </label>
            <select
              id="addressType"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.accountTypeId ? 'border-red-500' : ''
              }`}
              {...register('address.addressType', {
                required: { value: true, message: 'Account type is required' },
                min: { value: 1, message: 'Please select an account type' }
              })}
            >
              <option value="">Select Account Type</option>
              <option value="TEMPORARY ">Temprory </option>
              <option value="PERMANENT ">Permanent</option>
            </select>
            {errors.addressType && (
              <p className="text-red-500 text-xs italic">{errors.addressType.message}</p>
            )}
          </div>
        

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* House Number */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="houseNumber">
                House Number
              </label>
              <input
                id="houseNumber"
                type="text"
                placeholder="House Number"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.address?.houseNumber ? 'border-red-500' : ''
                }`}
                {...register('address.houseNumber', {
                  required: { value: true, message: 'House number is required' }
                })}
              />
              {errors.address?.houseNumber && (
                <p className="text-red-500 text-xs italic">{errors.address.houseNumber.message}</p>
              )}
            </div>

            {/* Street */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="street">
                Street
              </label>
              <input
                id="street"
                type="text"
                placeholder="Street"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.address?.street ? 'border-red-500' : ''
                }`}
                {...register('address.street', {
                  required: { value: true, message: 'Street is required' }
                })}
              />
              {errors.address?.street && (
                <p className="text-red-500 text-xs italic">{errors.address.street.message}</p>
              )}
            </div>

            {/* Landmark */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="landmark">
                Landmark
              </label>
              <input
                id="landmark"
                type="text"
                placeholder="Landmark"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register('address.landmark')}
              />
            </div>

            {/* Area */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="area">
                Area
              </label>
              <input
                id="area"
                type="text"
                placeholder="Area"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.address?.area ? 'border-red-500' : ''
                }`}
                {...register('address.area', {
                  required: { value: true, message: 'Area is required' }
                })}
              />
              {errors.address?.area && (
                <p className="text-red-500 text-xs italic">{errors.address.area.message}</p>
              )}
            </div>

            {/* Pincode */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pincode">
                Pincode
              </label>
              <input
                id="pincode"
                type="text"
                placeholder="Pincode"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.address?.pincode ? 'border-red-500' : ''
                }`}
                {...register('address.pincode', {
                  required: { value: true, message: 'Pincode is required' },
                  pattern: {
                    value: /^\d{6}$/,
                    message: 'Pincode must be 6 digits'
                  }
                })}
              />
              {errors.address?.pincode && (
                <p className="text-red-500 text-xs italic">{errors.address.pincode.message}</p>
              )}
            </div>

            {/* City ID */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cityId">
                City
              </label>
              <select
                id="cityId"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.address?.cityId ? 'border-red-500' : ''
                }`}
                {...register('address.cityId', {
                  required: { value: true, message: 'City is required' },
                  min: { value: 1, message: 'Please select a city' }
                })}
              >
                <option value="">Select City</option>
                {cityId.map( (city) => {
                    return (
                        <option value={city.id} key={city.id}> {city.name} </option>
                    )
                } )}
              </select>
              {errors.address?.cityId && (
                <p className="text-red-500 text-xs italic">{errors.address.cityId.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Open Account'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatAccount;