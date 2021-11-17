import React from "react"

const Employees = (props) => {
  console.log(props.employees);
  
  const renderEmployees = () => {
    return props.employees.map((employee) => {
      return (
        <div>
          <h1>{employee.name}</h1>
          <p>{employee.email}</p>
          <p>{employee.saying}</p>
          <p>{employee.age}</p>
        </div>
      );
    })
  };

  return (
    <div>
      <p>Employees: {renderEmployees()}</p>
    </div>
  );
};

export default Employees;
