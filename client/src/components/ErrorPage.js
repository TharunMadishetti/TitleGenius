// ErrorPage.js

import React from 'react';

const ErrorPage = ({ errorCode, errorMessage }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="text-5xl text-red-500 mb-4">😞</div>
      <h1 className="text-3xl font-bold">Oops! An Error Occurred</h1>
      {errorCode && <p className="text-lg text-gray-600 mt-2">Error Code: {errorCode}</p>}
      {errorMessage && <p className="text-lg text-gray-600 mt-2">{errorMessage}</p>}
      <button
        className="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
        onClick={() => window.location.reload()}
      >
        Refresh Page
      </button>
    </div>
  );
};

export default ErrorPage;
