import React from "react";

const employees = [
  {
    name: "John Doe",
    role: "Store Manager",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Olivia Williams",
    role: "Cashier",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Emily Johnson",
    role: "Sales Associate",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Michael Brown",
    role: "Assistant Manager",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Sophia Davis",
    role: "Inventory Specialist",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "Liam Willson",
    role: "Stockroom Clerk",
    img: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const EmployeeList = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow w-80">
      <h2 className="text-lg font-semibold mb-4">Employees</h2>
      <div className="space-y-4">
        {employees.map((emp, index) => (
          <div key={index} className="flex items-center space-x-3">
            <img
              src={emp.img}
              alt={emp.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-medium">{emp.name}</p>
              <p className="text-sm text-gray-500">{emp.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
