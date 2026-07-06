import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="bg-purple-500 dark:bg-purple-500 w-10 h-10 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-lg">AG</span>
      </div>

      <h1 className="hidden sm:block text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
        Ankit <span className="text-purple-500">Gupta</span>
      </h1>
    </div>
  );
};

export default Logo;