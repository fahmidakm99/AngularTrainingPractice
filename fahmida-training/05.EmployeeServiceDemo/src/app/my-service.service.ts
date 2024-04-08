import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  getEmployee: any[] = [
    { code: "e001", name: 'name1', gender: 'Male', annualSalary: 5500, dateofBirth: '25/6/1988' },
    { code: "e002", name: 'name2', gender: 'Male', annualSalary: 6700, dateofBirth: '25/11/1980' },
    { code: "e003", name: 'name3', gender: 'Male', annualSalary: 8900, dateofBirth: '27/11/1980' },
    { code: "e001", name: 'name4', gender: 'Female', annualSalary: 9000, dateofBirth: '9/6/1991' }
];
}

