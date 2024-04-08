import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonEnvComponent } from './person-env.component';

describe('PersonEnvComponent', () => {
  let component: PersonEnvComponent;
  let fixture: ComponentFixture<PersonEnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonEnvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
