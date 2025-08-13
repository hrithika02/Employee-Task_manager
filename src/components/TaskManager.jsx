import React, { useState } from "react";

const TaskManager = () => {
  const [employee, setEmployee] = useState("");
  const [task, setTask] = useState("");
  const [assignedTasks, setAssignedTasks] = useState([]);

  const handleAssign = () => {
    if (employee.trim() && task.trim()) {
      setAssignedTasks([...assignedTasks, { employee, task }]);
      setEmployee("");
      setTask("");
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = assignedTasks.filter((_, i) => i !== index);
    setAssignedTasks(updatedTasks);
  };

  const handleEdit = (index) => {
    const taskToEdit = assignedTasks[index];
    setEmployee(taskToEdit.employee);
    setTask(taskToEdit.task);
    handleDelete(index);
  };

  return (
    <div className="p-6 ">
      <h2 className="text-2xl font-bold mb-4">Assign Task</h2>

      {/* Input fields */}
      <input
        type="text"
        placeholder="Employee Name"
        value={employee}
        onChange={(e) => setEmployee(e.target.value)}
        className="border p-2 mr-2 rounded w-2/4"
      />
      <input
        type="text"
        placeholder="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 mr-2 rounded w-1/3"
      />
      <button
        onClick={handleAssign}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Assign
      </button>

      {/* Assigned Tasks Section */}
      <h3 className="text-xl font-semibold mt-6 mb-2">Assigned Tasks</h3>
      <ul>
        {assignedTasks.map((t, index) => (
          <li
            key={index}
            className="p-2 my-2 rounded flex justify-between items-center"
            style={{ backgroundColor: "#cefad0" }} 
          >
            <span>
              <strong>{t.employee}</strong>: {t.task}
            </span>
            <div>
              <button
                onClick={() => handleEdit(index)}
                className="bg-green-500 px-3 py-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
