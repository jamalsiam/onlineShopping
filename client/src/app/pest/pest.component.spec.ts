import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PestComponent } from './pest.component';

describe('PestComponent', () => {
  let component: PestComponent;
  let fixture: ComponentFixture<PestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
