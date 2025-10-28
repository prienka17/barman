import React from "react";
import HomePage from "./HomePage";
import About from "./about";
import How from "./how"; 

function App() {
  return (
    <div className="bg-white text-gray-900">
      {/* Home Page Section */}
      <div>
        <HomePage />
      </div>

      {/* About Section */}
      <div className="min-h-screen flex justify-center items-start px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-7xl">
          <About />
        </div>
      </div>

      {/* How It Works Section */}
      <div className="min-h-screen flex justify-center items-start px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="w-full max-w-7xl">
          <How />
        </div>
      </div>
    </div>
  );
}

export default App;
