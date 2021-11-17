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

// import React from "react";

// const Employees = (props) => {
//   console.log(props.employees);
 
//   const renderEmployees = () => {
//     return props.employees.map((person) => {
//       return (
//       <div style={{margin:"20px", border:'1px solid'}}>
//         <h1>{person.name}</h1>
//         <p>{person.email}</p>
//         <p>{person.saying}</p>
//         <p>{person.age}</p>
//       </div>
//         );
//     })
//   };

//   return (
//     <div>
//     <p>Persons: {renderEmployees()}</p>
//   </div>
//   );
// };

// // export component
// export default Employees;
