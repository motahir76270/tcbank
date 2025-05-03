import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalCustomers: 0,
    pendingLoans: 0,
    approvedLoans: 0,
    pendingCreditCards: 0,
    approvedCreditCards: 0,
    totalTransactions: 0,
    totalTransactionsToday: 0
  });

  const handleData = async () => {
    const token = JSON.parse(localStorage.getItem('token'));
    try {
      const { data } = await axios.get(`http://3.110.164.139:8080/manager/dashboard`, {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
      });
      //console.log(data.data);
      if (data.code === 1) {
        setDashboardData(data.data);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Manager Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Customers Card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Total Customers</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">
            {dashboardData.totalCustomers}
          </p>
        </div>

        {/* Loans Card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Loan Applications</h3>
          <div className="flex justify-between mt-2">
            <div>
              <p className="text-gray-500 text-xs">Pending</p>
              <p className="text-xl font-bold text-gray-800">
                {dashboardData.pendingLoans}
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-xs">Approved</p>
              <p className="text-xl font-bold text-gray-800">
                {dashboardData.approvedLoans}
              </p>
            </div>
          </div>
        </div>

        {/* Credit Cards Card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Credit Cards</h3>
          <div className="flex justify-between mt-2">
            <div>
              <p className="text-gray-500 text-xs">Pending</p>
              <p className="text-xl font-bold text-gray-800">
                {dashboardData.pendingCreditCards}
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-xs">Approved</p>
              <p className="text-xl font-bold text-gray-800">
                {dashboardData.approvedCreditCards}
              </p>
            </div>
          </div>
        </div>

        {/* Transactions Card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Transactions</h3>
          <div className="flex justify-between mt-2">
            <div>
              <p className="text-gray-500 text-xs">Total</p>
              <p className="text-xl font-bold text-gray-800">
                {dashboardData.totalTransactions}
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-xs">Today</p>
              <p className="text-xl font-bold text-gray-800">
                {dashboardData.totalTransactionsToday}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Loans */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-800 font-medium mb-4">Recent Loan Applications</h3>
          <div className="bg-gray-100 h-40 rounded flex items-center justify-center">
            <p className="text-gray-500">Loan data will appear here</p>
          </div>
        </div>

        {/* Recent Credit Cards */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-800 font-medium mb-4">Recent Credit Card Applications</h3>
          <div className="bg-gray-100 h-40 rounded flex items-center justify-center">
            <p className="text-gray-500">Credit card data will appear here</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard