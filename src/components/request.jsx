import React from "react";

const Request = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow w-80 ">
      <h2 className="text-lg font-semibold mb-2">Shift Swap Request</h2>
      <p className="text-gray-700 mb-4">
        John Doe has requested to swap shifts on Jun 17 with you.
      </p>
      <div className="flex space-x-3">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Approve
        </button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">
          Decline
        </button>
      </div>
    </div>
  );
};

export default Request;
