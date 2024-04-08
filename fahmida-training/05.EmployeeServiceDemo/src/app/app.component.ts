import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { PersonComponent } from './person/person.component';
import { HeaderComponent } from './header/header.component';
import { BindingTestComponent } from './binding-test/binding-test.component';
import { PersonEnvComponent } from './person-env/person-env.component';
import { MyEmpServiceComponent } from './my-emp-service/my-emp-service.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeComponent, 
    PersonComponent, HeaderComponent, BindingTestComponent, 
    PersonEnvComponent, MyEmpServiceComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularDemo';
  persons: string[] = ['name1','Name2', 'name3'];
  onPersonCreated(name:string){
    this.persons.push(name);
  }
}
