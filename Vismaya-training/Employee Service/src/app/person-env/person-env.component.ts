import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-person-env',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './person-env.component.html',
  styleUrl: './person-env.component.css'
})
export class PersonEnvComponent {
  @Output() personCreate = new EventEmitter<string>();
  enteredPersonName = '';
  onCreatePerson() {
    console.log('Created a person: ' + this.enteredPersonName);
    this.personCreate.emit(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
