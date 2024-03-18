// employee-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    // Load employees from service
    this.employees = this.employeeService.getAllEmployees();
  }

  viewEmployeeDetails(employeeId: number): void {
    // Navigate to employee details route
    this.router.navigate(['/employees', employeeId]);
  }

  deleteEmployee(employeeId: number): void {
    // Call the deleteEmployee method from the service
    this.employeeService.deleteEmployee(employeeId);
    // Reload employees after deletion
    this.loadEmployees();
  }

  addEmployee(): void {
    // Create a new employee object (replace with your form data)
    const newEmployee: Employee = {
      EmployeeId: this.generateEmployeeId(), // Generate a unique employee ID
      EmployeeNumber: (this.employees.length + 1), // Generate employee number (example)
      FirstName: 'John', // Example first name
      LastName: 'Doe', // Example last name
      Birthday: '1990-01-01', // Example birthday
      Gender: 'Male', // Example gender
      Picture: 'assets/default-avatar.png' // Example picture URL
    };
    // Add the new employee to the list
    this.employeeService.addEmployee(newEmployee);
    // Reload employees after addition
    this.loadEmployees();
  }

  // Generate a unique employee ID (example implementation)
  private generateEmployeeId(): number {
    return Math.floor(Math.random() * 1000) + 1; // Generate a random ID (example)
  }

  editEmployee(employeeId: number): void {
    // Navigate to edit employee route
    this.router.navigate(['/employees/edit', employeeId]);
  }
}
