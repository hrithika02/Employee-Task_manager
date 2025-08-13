import React, { useState } from 'react';
import { FaHome, FaCalendar, FaUsers, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidesection = () => {
  const [path, setPath] = useState("/dashboard");
  const navigate = useNavigate();

  const cardData = [
    { icon: <FaHome className="text-2xl" />, title: "Dashboard", path: "/dashboard" },
    { icon: <FaCalendar className="text-2xl" />, title: "Shift Schedule", path: "/dashboard" },
    { icon: <FaUsers className="text-2xl" />, title: "Employees", path: "/employees" },
    { icon: <FaCog className="text-2xl" />, title: "Settings", path: "/dashboard" }
  ];

  const handleClick = (newPath) => {
    setPath(newPath);
    navigate(newPath);
  };

  return (
    <div className="flex flex-col w-1/4 gap-5 p-7 border-r-2 border-gray-300">
      {cardData.map((item, index) => (
        <div 
          key={index} 
          className={`flex items-center bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors cursor-pointer }`}
          onClick={() => handleClick(item.path)}
        >
          <div className="mr-4 text-blue-600">
            {item.icon}
          </div>
          <span className="text-lg font-semibold">{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidesection;
