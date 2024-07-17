import React from 'react';
import Employee from './employee.jsx';


function getRandomPosition() {
  const positions = ['Manager', 'Developer', 'Designer'];
  return positions[Math.floor(Math.random() * positions.length)];
}

function getRandomSalary(position) {
  switch (position) {
    case 'Manager':
      return (Math.random() * 60000 + 80000).toFixed(2); 
    case 'Developer':
      return (Math.random() * 40000 + 50000).toFixed(2); 
    case 'Designer':
      return (Math.random() * 30000 + 40000).toFixed(2); 
    default:
      return 'N/A';
  }
}

const employees = [
  { name: 'Welin Bacacao', position: 'Manager', salary: getRandomSalary('Manager'), status: 'Active' },
  { name: 'Norvel Bacacao', position: 'Developer', salary: getRandomSalary('Developer'), status: 'Active' },
  { name: 'Michael Johnson', position: 'Developer', salary: getRandomSalary('Developer'), status: 'Active' },
  { name: 'Emily Robin ', position: 'Developer', salary: getRandomSalary('Developer'), status: 'Active' },
  { name: 'William Danny', position: 'Developer', salary: getRandomSalary('Developer'), status: 'Active' },
  { name: 'Joan Bacus', position: 'Manager', salary: getRandomSalary('Manager'), status: 'Active' },
  { name: 'Greg Martinez', position: 'Developer', salary: getRandomSalary('Developer'), status: 'Active' },
  { name: 'Andrea Anderson', position: 'Designer', salary: getRandomSalary('Designer'), status: 'Active' },
  { name: 'Geron Garcia', position: 'Designer', salary: 'N/A', status: 'Not Active' },
  { name: 'Alexander Baritugo', position: 'Manager', salary: 'N/A', status: 'Not Active' },
];


const Employees = () => (
  <div>
    <h1>Employees</h1>
    <table border="1" cellPadding="5" cellSpacing="0">
      <thead>
        <tr>
          <th>No.</th>
          <th>Employee Names</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <Employee key={index} employee={employee} index={index} />
        ))}
      </tbody>
    </table>
  </div>
);

export default Employees;

   