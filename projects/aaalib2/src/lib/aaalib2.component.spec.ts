import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aaalib2Component } from './aaalib2.component';

describe('Aaalib2Component', () => {
  let component: Aaalib2Component;
  let fixture: ComponentFixture<Aaalib2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aaalib2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aaalib2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
