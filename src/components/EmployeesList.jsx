import React from "react";

const employees = [
  { name: "John Doe", role: "Store Manager", img: "https://i.pravatar.cc/150?img=1" },
  { name: "Olivia Williams", role: "Cashier", img: "https://i.pravatar.cc/150?img=2" },
  { name: "Emily Johnson", role: "Sales Associate", img: "https://i.pravatar.cc/150?img=3" },
  { name: "Michael Brown", role: "Assistant Manager", img: "https://i.pravatar.cc/150?img=4" },
  { name: "Sophia Davis", role: "Inventory Specialist", img: "https://i.pravatar.cc/150?img=5" },
  { name: "Liam Willson", role: "Stockroom Clerk", img: "https://i.pravatar.cc/150?img=6" },
  { name: "Ava Taylor", role: "Cashier", img: "https://i.pravatar.cc/150?img=7" },
  { name: "Noah Smith", role: "Sales Associate", img: "https://i.pravatar.cc/150?img=8" },
  { name: "Mia Johnson", role: "Customer Service Rep", img: "https://i.pravatar.cc/150?img=9" },
  { name: "Ethan Williams", role: "Stockroom Clerk", img: "https://i.pravatar.cc/150?img=10" },
  { name: "Isabella Martinez", role: "Cashier", img: "https://i.pravatar.cc/150?img=11" },
  { name: "Lucas Anderson", role: "Store Manager", img: "https://i.pravatar.cc/150?img=12" },
  { name: "Charlotte Thomas", role: "Sales Associate", img: "https://i.pravatar.cc/150?img=13" },
  { name: "James Lee", role: "Assistant Manager", img: "https://i.pravatar.cc/150?img=14" },
  { name: "Amelia Perez", role: "Inventory Specialist", img: "https://i.pravatar.cc/150?img=15" },
  { name: "Benjamin Hall", role: "Stockroom Clerk", img: "https://i.pravatar.cc/150?img=16" },
  { name: "Harper Allen", role: "Cashier", img: "https://i.pravatar.cc/150?img=17" },
  { name: "Elijah Young", role: "Sales Associate", img: "https://i.pravatar.cc/150?img=18" },
  { name: "Evelyn Hernandez", role: "Customer Service Rep", img: "https://i.pravatar.cc/150?img=19" },
  { name: "William King", role: "Stockroom Clerk", img: "https://i.pravatar.cc/150?img=20" },
  { name: "Abigail Wright", role: "Cashier", img: "https://i.pravatar.cc/150?img=21" },
  { name: "Daniel Scott", role: "Store Manager", img: "https://i.pravatar.cc/150?img=22" },
  { name: "Sofia Green", role: "Sales Associate", img: "https://i.pravatar.cc/150?img=23" },
  { name: "Henry Adams", role: "Assistant Manager", img: "https://i.pravatar.cc/150?img=24" },
  { name: "Ella Baker", role: "Inventory Specialist", img: "https://i.pravatar.cc/150?img=25" },
  { name: "Jackson Nelson", role: "Stockroom Clerk", img: "https://i.pravatar.cc/150?img=26" },
  { name: "Scarlett Carter", role: "Cashier", img: "https://i.pravatar.cc/150?img=27" },
  { name: "Alexander Mitchell", role: "Sales Associate", img: "https://i.pravatar.cc/150?img=28" },
  { name: "Grace Roberts", role: "Customer Service Rep", img: "https://i.pravatar.cc/150?img=29" },
  { name: "Logan Turner", role: "Stockroom Clerk", img: "https://i.pravatar.cc/150?img=30" }
];

const EmployeesList = () => {
  return (
    <div className=" w-1/2 mx-auto mb-5">
      <h2 className="text-2xl font-bold mt-5 mb-4">Employees List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 gap-4">
        {employees.map((emp, index) => (
          <div key={index} className="flex items-center space-x-3 rounded-lg p-4 bg-white shadow-md">
            <img
              src={emp.img}
              alt={emp.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold">{emp.name}</div>
              <div className="text-sm text-gray-500">{emp.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeesList;
