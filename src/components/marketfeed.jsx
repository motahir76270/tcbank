import React from 'react'

const Marketfeed = () => {
  return (
    <>
      <div className="flex gap-10 h-12 py-2 px-6">
        <h1 className="text-[#A20A3A] font-bold text-2xl px-5"> Market Feed</h1>

        <ul className="flex gap-6 font-bold my-auto">
          <li>
            <a href=""> TC BANK</a>
          </li>
          <li>
            <a href=""> NSE </a>
          </li>
          <li>
            <a href=""> BSE</a>
          </li>
          <li>
            <a href=""> Daily Forex Rates</a>
          </li>
        </ul>
      </div>
      <div className="bg-[#FDBD30] w-100% h-20 py-6 px-10">
        <ul className="flex gap-6 font-bold my-auto text-[#A20A3A]">
          <li>
            <a href=""> Calculate</a>
          </li>
          <li>
            <a href=""> Auctions </a>
          </li>
          <li>
            <a href=""> Tenders / Empanelment </a>
          </li>
          <li>
            <a href=""> Public Notices </a>
          </li>
          <li>
            <a href=""> Recruitments </a>
          </li>
          <li>
            <a href=""> Economic Scenario </a>
          </li>
          <li>
            <a href=""> Bank Holidays </a>
          </li>
          <li>
            <a href=""> Digital Calendar</a>
          </li>
          <li>
            <a href=""> Regulatory Disclosure </a>
          </li>
        </ul>
      </div>

      <div className="flex py-10 px-12 gap-5 border-1 w-100%  justify-evenly">

        <div className="w-50 flex flex-col gap-1">
          <h2 className="text-[#A20A3A] font-bold">Persional</h2>
          <ul className=" flex flex-col gap-1 text-sm ">
            <li>
              <a href=""> Deposit </a>
            </li>
            <li>
              <a href="/loanApply"> Loans </a>
            </li>
            <li>
              <a href=""> Approved Housing Projects </a>
            </li>
            <li>
              <a href="/credit-card"> Apply Credit Card </a>
            </li>
          </ul>
        </div>

        <div className="w-50 flex flex-col gap-1">
          <h2 className="text-[#A20A3A] font-bold">Corporate</h2>
          <ul className=" flex flex-col gap-1 text-sm ">
            <li>
              <a href=""> Corporate Loan </a>
            </li>
            <li>
              <a href=""> Forex Sevrvices offer </a>
            </li>
            <li>
              <a href=""> Exporter and Importer </a>
            </li>
            <li>
              <a href=""> Cash MAnagement Services </a>
            </li>
            <li>
              <a href=""> Gold Card scheme  </a>
            </li>
          </ul>
        </div>

        <div className="w-50 flex flex-col gap-1">
          <h2 className="text-[#A20A3A] font-bold">International</h2>
          <ul className=" flex flex-col gap-1 text-sm ">
            <li>
              <a href=""> FX Retail Platform </a>
            </li>
            <li>
              <a href=""> Libor Transion </a>
            </li>
            <li>
              <a href=""> Schemes/Products </a>
            </li>
            <li>
              <a href=""> NRI Services </a>
            </li>
            <li>
              <a href=""> World Travel Card </a>
            </li>
          </ul>
        </div>

        <div className="w-50 flex flex-col gap-1">
          <h2 className="text-[#A20A3A] font-bold">Capital Services</h2>
          <ul className=" flex flex-col gap-1 text-sm ">
            <li>
              <a href=""> Depository Services </a>
            </li>
            <li>
              <a href=""> Mutual Funds </a>
            </li>
            <li>
              <a href=""> Merchant Banker </a>
            </li>
            <li>
              <a href=""> Banker To an Issue </a>
            </li>
            <li>
              <a href=""> Debenture Trustee </a>
            </li>
          </ul>
        </div>

        <div className="w-50 flex flex-col gap-1">
          <h2 className="text-[#A20A3A] font-bold">About Us</h2>
          <ul className=" flex flex-col gap-1 text-sm ">
            <li>
              <a href=""> Screen Reader Accessibility </a>
            </li>
            <li>
              <a href=""> Desclaimer </a>
            </li>
            <li>
              <a href=""> Privacy & Policy </a>
            </li>
            <li>
              <a href=""> Contact us </a>
            </li>
            <li>
              <a href=""> Site Map </a>
            </li>
          </ul>
        </div>

        <div className="w-50 flex flex-col gap-1">
          <h2 className="text-[#A20A3A] font-bold">Important Links</h2>
          <ul className=" flex flex-col gap-1 text-sm ">
            <li>
              <a href=""> RBI </a>
            </li>
            <li>
              <a href=""> SEBI </a>
            </li>
            <li>
              <a href=""> Policy </a>
            </li>
            <li>
              <a href=""> V-KYC </a>
            </li>
            <li>
              <a href=""> UDGAM </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Marketfeed