import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoBoletoComponent } from './novo-boleto.component';

describe('NovoBoletoComponent', () => {
  let component: NovoBoletoComponent;
  let fixture: ComponentFixture<NovoBoletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovoBoletoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoBoletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
