import React from "react";

export default function About() {
  return (
    <section className="bg-white text-gray-900 px-4 sm:px-6 lg:px-12 py-40 max-w-7xl mx-auto">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 pb-20 ">
        <div>
          <p className="text-sm font-medium text-green-800 bg-green-100 rounded-full px-3 py-1 inline-block mb-4">
            About Casa Service
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Revolutionizing Cash Flow <br className="hidden sm:block" /> for
            Business Owners!
          </h1>
        </div>
        <div className="max-w-md">
          <p className="text-gray-600 mb-4">
            Empowering businesses with faster cash access, CASA provides a
            secure, fast, and flexible solution to get early payments for credit
            card sales.
          </p>
          <button className="bg-green-800 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition">
            Join Now
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-gray-50 hover:bg-amber-100  rounded-xl shadow-sm p-6 flex flex-col">
          <div className="flex items-center mb-4">
            
            <h3 className="text-2xl font-bold">
              Secure and Instant Cash Advances
            </h3>
          </div>
           <div className="w-16 h-13 bg-green-100 flex items-center justify-center rounded-full mr-2">
              <img
                src="/alo1.png"
                alt="Growth arrow icon"
                className="h-13 w-16 md:h-13 md:w-16 inline-block"
             />
           </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            No more waiting weeks—convert daily credit card transactions into
            cash within 24 hours to keep your business running smoothly.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-50 hover:bg-lime-500 rounded-xl shadow-sm p-6 flex flex-col">
          <div className="flex items-center mb-4">
           
            <h3 className="text-2xl font-bold">
              Transparent and Fair Pricing Process
            </h3>
          </div>

            <div className="w-16 h-13 bg-green-100 flex items-center justify-center rounded-full mr-2">
              <img
                src="/alo2.png"
                alt="Growth arrow icon"
                className="h-13 w-16 md:h-13 md:w-16 inline-block"
             />
           </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            No Hidden Fees, No Surprises. Enjoy clear, upfront pricing with
            flexible funding options, so you always know what to expect.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-green-900 hover:bg-green-800 hover:text-white text-black  rounded-xl shadow-sm p-6 flex flex-col">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-bold">
              Flexible and Secure Payout Options
            </h3>
          </div>
           <div className="w-16 h-13 bg-green-100 flex items-center justify-center rounded-full mr-2">
              <img
                src="/alo3.png"
                alt="Growth arrow icon"
                className="h-13 w-16 md:h-13 md:w-16 inline-block"
             />
           </div>
          <p className="text-sm leading-relaxed">
            We offer flexible and easy payout options tailored to your needs,
            ensuring quick access to your funds. Choose from multiple payment
            methods.
          </p>
        </div>
      </div>
    </section>
  );
}
