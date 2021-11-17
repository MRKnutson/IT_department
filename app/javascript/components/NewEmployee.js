import React from "react"

const NewEmployee = (props) => {
  return (
    <div>
      <h1>New Employee</h1>
      <form action = "/employees" method = "post">
        <p>Name:</p>
        <input name = "employee[name]" />
        <p>Email:</p>
        <input name = "employee[email]" />
        <p>Saying:</p>
        <input name = "employee[saying]" />
        <p>Age:</p>
        <input name = "employee[age]" />
        <button type="submit">Add Here</button>
      </form>
    </div>
  );
};

export default NewEmployee;