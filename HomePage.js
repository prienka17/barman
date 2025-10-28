import React from "react";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      {/* Navbar */}
     
    <header
  className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100
             px-2 sm:px-4 md:px-10 py-3 flex items-center justify-between
             min-w-[300px] shadow-sm"
    >
  
  {/* Logo Section */}
  <div className="flex items-center space-x-2 shrink-0">
    <img
      src="/fectologo.png"
      alt="Facto Financial Services Logo"
      className="h-6 sm:h-7 md:h-9 object-contain"
    />
  </div>

  {/* Navigation Links */}
  <nav className="flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-5 text-gray-700 font-medium whitespace-nowrap overflow-x-auto scrollbar-hide">
    <a href="#services" className="text-[9px] sm:text-[10px] md:text-sm hover:text-green-600 transition">Services</a>
    <a href="#how" className="text-[9px] sm:text-[10px] md:text-sm hover:text-green-600 transition">How it works</a>
    <a href="#why" className="text-[9px] sm:text-[10px] md:text-sm hover:text-green-600 transition">Why it’s different</a>
    <a href="#reviews" className="text-[9px] sm:text-[10px] md:text-sm hover:text-green-600 transition">Reviews</a>
    <a href="#pricing" className="text-[9px] sm:text-[10px] md:text-sm hover:text-green-600 transition">Pricing</a>
    <a href="#contact" className="text-[9px] sm:text-[10px] md:text-sm hover:text-green-600 transition">Contact</a>
  </nav>

  {/* Action Buttons */}
  <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 shrink-0">
    <button className="px-2 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] md:text-sm font-medium text-green-700 border border-green-200 hover:bg-green-50 transition">
      Sign In
    </button>
    <button className="px-2 sm:px-3 py-1 rounded-full bg-green-700 text-white text-[9px] sm:text-[10px] md:text-sm font-medium hover:bg-green-800 transition">
      Sign Up
    </button>
  </div>
</header>




      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 md:px-16 py-16">
        <div className="bg-green-50 text-green-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
          Fast. Secure. Hassle-Free
        </div>
    <h1 className=" font-bold text-gray-900 leading-tight max-w-3xl  text-xl sm:text-2xl md:text-4xl lg:text-5xl">
  <div className="flex items-center justify-center md:justify-start flex-wrap gap-2">
    <span>Get Paid Faster</span>
    <img
      src="/logo2.png"
      alt="Growth arrow icon"
      className="h-10 w-10 md:h-10 md:w-10 inline-block"
    />
    <span className="">Instant Cash</span>
  </div>
  <div className="text-center mt-1">
    for Businesses!
  </div>
</h1>

        <p className="mt-4 text-gray-600 max-w-2xl text-base md:text-lg">
          Stop waiting months for credit card payments. CASA helps business owners
          access cash instantly by converting card transactions into immediate funds.
        </p>
        <button className="mt-8 bg-green-700 text-white px-8 py-3 rounded-full font-medium hover:bg-green-800 transition">
          Get Started
        </button>
      </section>




     {/* Info Cards Section */}
<section className="px-6 md:px-16 pb-16 grid gap-6 md:grid-cols-3">

  {/* Sales Overview */}
  <div className="bg-green-100 hover:bg-slate-100 border border-green-100 rounded-2xl p-6 shadow-sm">
    {/* Header */}
    <div className="flex items-center mb-2">
      <div className="w-10 h-10 bg-green-100 flex items-center justify-center rounded-full mr-2">
         <img
      src="/lo3.png"
      alt="Growth arrow icon"
      className="h-10 w-10 md:h-10 md:w-10 inline-block"
    />
      </div>
      <h3 className="font-semibold text-gray-800">Sales overview from Previous Day</h3>
    </div>

    {/* Total Sales */}
 


    <div className=" bg-slate-100   relative w-full max-w-xs mx-auto">
          <p className="flex items-center text-gray-600 mb-4 text-sm space-x-2">
  <img
    src="/lo4.png"
    alt="Growth arrow icon"
    className="h-6 w-6"
  />
  <span>
    Total sales: <span className="font-bold text-gray-900 text-base">$12,500</span>
  </span>
</p>

  {/* Bar Chart */}
  <div className="  flex items-end justify-between h-40">
    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
      <div key={day} className="flex flex-col items-center space-y-1 relative">
        {/* Highlighted bar for Thursday */}
        <div
          className={`w-6 rounded-md transition-all duration-300 ${
            i === 4 ? "bg-green-900 relative" : "bg-green-200"
          }`}
          style={{
            height: `${[50, 35, 55, 50, 90, 40, 65][i]}px`,
          }}
        >
          {/* Tooltip for highest sale */}
          {i === 4 && (
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-yellow-100 text-gray-900 text-xs font-semibold px-2 py-1 rounded-md shadow">
              <p className="flex flex-col items-center">
                <span className="text-[10px] font-normal text-gray-700">
                  Highest sale
                </span>
                $2,450
              </p>
            </div>
          )}
        </div>
        <span className="text-xs text-gray-600">{day}</span>
      </div>
    ))}
  </div>
</div>

    {/* Stats*/}
    <div className="text-sm text-gray-600 space-y-3">
      
      <div className="bg-green-100 rounded-xl px-4 py-2 text-gray-700 font-medium text-sm flex items-center justify-between">
        
        <button className="bg-lime-300  text-gray-800 font-medium px-6 py-2 rounded-full w-full max-w-xs mx-auto flex items-center justify-center space-x-1 shadow-sm">
  <span>Avg. sale:</span>
  <span>$104.16 / per transaction</span>
</button>
      </div>
    </div>
  </div>

  {/* Factoring Possible Amount  */}
  <div className="bg-green-50 hover:bg-green-400 border border-green-200 rounded-2xl p-6 shadow-sm ">
  {/* Header */}
  <div className="flex items-center mb-4">
    <div className="w-6 h-6 bg-green-200 flex items-center justify-center rounded-full mr-2">
      <svg
        className="w-3.5 h-3.5 text-green-700"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
    <h3 className="font-semibold text-gray-800">Factoring Possible Amount.</h3>
  </div>

  {/* Available Amount */}
  <div className="mb-6 bg-white/70 rounded-xl p-4 text-center shadow-inner w-2/4 ">
    <p className="text-gray-600 text-sm">Available amount</p>
    <h2 className="text-3xl font-bold text-gray-900">
      $15,375 <span className="text-sm text-gray-500 font-normal ml-1">USD</span>
    </h2>
  </div>

  {/* Factored Amount Section */}
  <div className="bg-white rounded-xl p-4 shadow-inner">
    <p className="text-gray-700 mb-2 text-2xl font-bold ">
      Factored amount vs. remaining balance
    </p>
 <div className="bg-slate-200 rounded-xl"> 
    <div className=" flex items-center justify-between mb-2">
      <span className="text-sm ">Factored balance</span>
      <span className="text-lg font-semibold text-gray-900">$11,531.25</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-green-700 h-2 rounded-full"
        style={{ width: "75%" }}
      ></div>
   
    </div>
    <p className="text-xs text-gray-500 mt-1">75%</p>
  </div>
  </div>
</div>


  {/* Secure & Streamlined Workflow */}
  <div className="bg-yellow-100 hover:bg-green-200 border border-yellow-200 rounded-3xl p-6 shadow-sm ">
  {/* Header */}
  <div className="flex items-center mb-6">
    <div className="w-7 h-7 bg-yellow-200 flex items-center justify-center rounded-full mr-2">
      <svg
        className="w-4 h-4 text-yellow-700"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6V3m0 18v-3m9-6h3M3 12H0m15.364 6.364l2.121 2.121M6.515 6.515L4.394 4.394m0 15.212l2.121-2.121m12.727-12.727l-2.121 2.121"
        />
      </svg>
    </div>
    <h3 className="font-semibold text-gray-800 text-lg">
      Secure & Streamlined Workflow
    </h3>
  </div>

  {/* Recent User */}
  <div className="mb-6 bg-white rounded-md border-2 -rotate-12 w-2/4 ">
    <p className="text-sm text-gray-700 mb-2 flex justify-between items-center">
      Recent User{" "}
      <span className="text-green-700 font-normalcursor-pointer">
        View All
      </span>
    </p>
    <div className="flex -space-x-2">
      {[...Array(5)].map((_, i) => (
        <img
          key={i}
          src={`https://i.pravatar.cc/40?img=${i + 5}`}
          alt="User avatar"
          className="w-8 h-8 rounded-full border-2 border-white"
        />
      ))}
      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-xs text-green-700 font-semibold border-2 border-white">
        +9
      </div>
    </div>
  </div>

  {/* Total Balance */}
  <div className="bg-white rounded-2xl p-4 mb-6 shadow-inner w-3/5 md:float-right ">
    <p className="text-sm text-gray-500">Total Balance</p>
    <h2 className="text-3xl font-bold text-gray-900">23,576.00</h2>
    <button className="mt-2 text-sm text-green-700 font-medium flex items-center gap-1">
      <span className="text-xl leading-none">+</span> Add Number
    </button>
  </div>

  {/* Online User Card */}
  <div className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm rotate-12 w-4/5">
    <div className="flex items-center gap-3">
      <img
        src="https://i.pravatar.cc/40?img=12"
        alt="User"
        className="w-10 h-10 rounded-full border"
      />
      <div>
        <p className="text-sm font-medium text-gray-800">Online</p>
        <p className="text-xs text-gray-500">Tomy Restaurant</p>
      </div>
    </div>
    <div className="text-right">
      <p className="text-green-600 font-semibold">+$10K</p>
      <button className="bg-green-100 text-green-700 text-xs px-3 py-0.5 rounded-full mt-1">
        Confirm
      </button>
    </div>
  </div>
</div>

  
</section>

<footer className="bg-green-900 text-white py-8 overflow-hidden">
  <div className="max-w-7xl mx-auto flex items-center gap-6 px-6">
    {/* Left Section */}
    <div className="flex items-center gap-4 flex-shrink-0">
      <p className="text-green-100 text-sm font-medium leading-tight text-right">
        Trusted by <br /> Top Companies
      </p>
      <div className="w-px h-8 bg-green-700"></div>
    </div>

    {/* Logo Slider */}
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-slide whitespace-nowrap items-center gap-16">
        {/* Repeat for smooth loop */}
        {[
          "Cubyn",
          "bastion",
          "DIGITS",
          "pipe",
          "ramp",
          "Cubyn",
          "bastion",
          "DIGITS",
          "pipe",
          "ramp",
        ].map((company, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-yellow-200 font-semibold text-lg md:text-xl flex-shrink-0"
          >
            {/* You can replace with actual logos (SVG/img) if available */}
            {company === "Cubyn" && (
              <svg
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0L0 10h5v10l10-10h-5V0z" />
              </svg>
            )}
            {company === "bastion" && (
              <div className="w-5 h-5 bg-yellow-400 rounded-sm"></div>
            )}
            {company === "DIGITS" && (
              <svg
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <circle cx="10" cy="10" r="8" />
              </svg>
            )}
            {company === "pipe" && (
              <svg
                className="w-4 h-4 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <rect x="3" y="2" width="8" height="16" rx="2" />
              </svg>
            )}
            {company === "ramp" && (
              <svg
                className="w-5 h-5 text-yellow-300 rotate-45"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 0110 10H10z" />
              </svg>
            )}
            <span>{company}</span>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Custom Animation */}
  <style jsx>{`
    @keyframes slide {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    .animate-slide {
      animation: slide 10s linear infinite;
    }
  `}</style>
</footer>



    </div>
  );
}

export default HomePage;
