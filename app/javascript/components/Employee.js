import React from "react"

const Employee = (props) => {
  console.log(props.employee);
  const renderEmployee = () => {
    return (
      <div>
        <h1>{props.employee.name}</h1>
        <p>Email: {props.employee.email}</p>
        <p>Favorite saying: {props.employee.saying}</p>
        <p>Age: {props.employee.age}</p>
      </div>
    )
  };
  return (
    <div>
      Employee: {renderEmployee()}
    </div>
  )
};

export default Employee;