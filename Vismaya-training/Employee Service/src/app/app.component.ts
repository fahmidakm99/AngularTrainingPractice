import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BindingTestComponent } from './binding-test/binding-test.component';
import { PersonComponent } from './person/person.component';
import { EmpComponent } from './emp/emp.component';
import { HeaderComponent } from './header/header.component';
import { PersonEnvComponent } from './person-env/person-env.component';
import { MyEmpServiceComponent } from './my-emp-service/my-emp-service.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BindingTestComponent, PersonComponent, EmpComponent, HeaderComponent, PersonEnvComponent, MyEmpServiceComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'This is my Demo App';
  persons: string[] = ['LAL','ANIL', 'RAJU'];
  onPersonCreated(name:string){
    this.persons.push(name);
}
}