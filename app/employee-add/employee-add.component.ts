// employee-add.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  newEmployee: Employee = {
    EmployeeId: 0,
    EmployeeNumber: 0,
    FirstName: '',
    LastName: '',
    Birthday: '',
    Gender: '',
    Picture: ''
  };

  constructor(private router: Router, private employeeService: EmployeeService) { }

  addEmployee(): void {
    this.employeeService.addEmployee(this.newEmployee);
    this.router.navigate(['/employees']);
  }
}

