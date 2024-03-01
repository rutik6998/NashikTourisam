import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreckComponent } from './treck.component';

describe('TreckComponent', () => {
  let component: TreckComponent;
  let fixture: ComponentFixture<TreckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
