import React from "react";

export default function How() {
  return (
    <section className="bg-gray-50 text-gray-900 px-4 sm:px-6 lg:px-12 py-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm font-medium text-green-800 bg-green-100 rounded-full px-3 py-1 inline-block mb-4">
          How it works
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
          Simple & Fast Receive Your <br className="hidden sm:block" /> Payment
          in 3 Steps!
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Empowering businesses with faster cash access, CASA provides a secure,
          fast, and flexible solution to get early payments for credit card
          sales.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 1 - Sign Up */}
        <div className="bg-white hover:bg-green-400 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="bg-green-100 hover:bg-green-500 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Sign Up</h3>
            <div className="flex flex-col space-y-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="text"
                placeholder="Company name"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>
          <h3 className="font-bold text-lg mb-2">Connect Your Business</h3>
          <p className="text-gray-600 text-sm mb-4">
            Sign up and link your credit card processor or POS system with CASA.
            We support all major payment providers.
          </p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>✅ Fast approval & easy integration</li>
            <li>✅ No impact on your credit score</li>
          </ul>
        </div>

        {/* Step 2 - Transactions for Early Payment */}
        <div className="bg-white hover:bg-yellow-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="bg-yellow-100 hover:bg-green-500 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-semibold">Maria kosta</p>
                <p className="text-gray-500 text-sm">Maria@mail.com</p>
              </div>
              <span className="text-green-700 font-semibold">+$10K</span>
            </div>
            <div className="bg-white rounded-xl p-4 text-sm">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total balance</span>
                <span className="font-semibold">$12000.00</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-500">discount rate</span>
                <span className="text-gray-800 font-medium">10%</span>
              </div>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-full w-full transition">
                See detail »
              </button>
            </div>
          </div>
          <h3 className="font-bold text-lg mb-2">
            Transactions for Early Payment
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Every morning, your previous day’s credit card transactions are
            automatically submitted for funding.
          </p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>✅ No waiting for 30–60 day settlements</li>
            <li>✅ Transparent discount rates</li>
          </ul>
        </div>

        {/* Step 3 - Receive Funds & Grow */}
        <div className="bg-white hover:bg-yellow-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="bg-green-100 hover:bg-green-300 rounded-xl p-6 mb-6">
            <div className="mb-4">
              <p className="font-semibold">Receive Money from card</p>
              <p className="text-gray-500 text-sm">
                Cash Deposited Within 24 Hours
              </p>
            </div>

            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold">Recent User</p>
                <span className="text-sm text-gray-500 cursor-pointer hover:text-green-600">
                  View All
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {/* Placeholder user avatars */}
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"
                    >
                        <img
          key={i}
          src={`https://i.pravatar.cc/40?img=${i + 5}`}
          alt="User avatar"
          className="w-8 h-8 rounded-full border-2 border-white"
        />
                    </div>
                  ))}
                </div>
                <span className="text-sm bg-green-200 text-green-800 rounded-full px-2 py-0.5">
                  9+
                </span>
              </div>
            </div>
          </div>
          <h3 className="font-bold text-lg mb-2">Receive Funds & Grow</h3>
          <p className="text-gray-600 text-sm mb-4">
            Every morning, your previous day’s credit card transactions are
            automatically submitted for funding.
          </p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>✅ Same-day or next-day payouts</li>
            <li>✅ Flexible repayment from future sales</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
