class EmployeesController < ApplicationController

  def index
    employees = Employee.all 
    render component: "Employees", props: {employees:employees}
  end

  def show
    employee = Employee.find(params[:id])
    render component: "Employee", props: { employee:employee}
  end

  def new
    render component: "NewEmployee"
  end

  def create
    Employee.create(name:params[:employee][:name], email:params[:employee][:email], saying:params[:employee][:saying], age:params[:employee][:age])
  end

end
