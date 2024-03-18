// employee.service.ts
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [
    {
      EmployeeId: 1,
      EmployeeNumber: 1001,
      FirstName: 'John',
      LastName: 'Doe',
      Birthday: '1990-05-15',
      Gender: 'Male',
      Picture: 'https://example.com/john.jpg'
    },
    {
      EmployeeId: 2,
      EmployeeNumber: 1002,
      FirstName: 'Jane',
      LastName: 'Smith',
      Birthday: '1985-10-20',
      Gender: 'Female',
      Picture: 'https://example.com/jane.jpg'
    }
  ];

  getAllEmployees(): Employee[] {
    return this.employees;
  }

  getEmployeeById(employeeId: number): Employee | undefined {
    return this.employees.find(emp => emp.EmployeeId === employeeId);
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  updateEmployee(employee: Employee): void {
    const index = this.employees.findIndex(emp => emp.EmployeeId === employee.EmployeeId);
    if (index !== -1) {
      this.employees[index] = employee;
    }
  }

  deleteEmployee(employeeId: number): void {
    this.employees = this.employees.filter(emp => emp.EmployeeId !== employeeId);
  }
}
