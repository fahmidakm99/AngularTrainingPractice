import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-emp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emp.component.html',
  styleUrl: './emp.component.css'
})
export class EmpComponent {
  employess: any[] = [
    { code: "e001", name: 'Mark', gender: 'Male', annualSalary: 5500, dateofBirth: '25/6/1988' },
    { code: "e002", name: 'Joel', gender: 'Male', annualSalary: 6700, dateofBirth: '25/11/1980' },
    { code: "e003", name: 'Allen', gender: 'Male', annualSalary: 8900, dateofBirth: '27/11/1980' },
    { code: "e001", name: 'Kate', gender: 'Female', annualSalary: 9000, dateofBirth: '9/6/1991' }
];

}
