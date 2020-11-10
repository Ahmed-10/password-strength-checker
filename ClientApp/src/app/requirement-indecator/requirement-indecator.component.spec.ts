import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementIndecatorComponent } from './requirement-indecator.component';

describe('RequirementIndecatorComponent', () => {
  let component: RequirementIndecatorComponent;
  let fixture: ComponentFixture<RequirementIndecatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementIndecatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementIndecatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
