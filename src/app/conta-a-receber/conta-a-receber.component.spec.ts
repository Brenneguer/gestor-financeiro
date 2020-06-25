import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaAReceberComponent } from './conta-a-receber.component';

describe('ContaAReceberComponent', () => {
  let component: ContaAReceberComponent;
  let fixture: ComponentFixture<ContaAReceberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaAReceberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaAReceberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
