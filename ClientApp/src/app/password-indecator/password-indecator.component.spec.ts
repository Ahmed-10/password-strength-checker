import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordIndecatorComponent } from './password-indecator.component';

describe('PasswordIndecatorComponent', () => {
  let component: PasswordIndecatorComponent;
  let fixture: ComponentFixture<PasswordIndecatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordIndecatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordIndecatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
