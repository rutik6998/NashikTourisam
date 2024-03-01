import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicnicComponent } from './picnic.component';

describe('PicnicComponent', () => {
  let component: PicnicComponent;
  let fixture: ComponentFixture<PicnicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PicnicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PicnicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
