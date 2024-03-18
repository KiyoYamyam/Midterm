import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employee: Employee | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    const employeeId = +this.route.snapshot.paramMap.get('id')!;
    this.employee = this.employeeService.getEmployeeById(employeeId);
  }

  saveChanges(): void {
    if (this.employee) {
      this.employeeService.updateEmployee(this.employee);
      this.router.navigate(['/employees', this.employee.EmployeeId]);
    }
  }
}
