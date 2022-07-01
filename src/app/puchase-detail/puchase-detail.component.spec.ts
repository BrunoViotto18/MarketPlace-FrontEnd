import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuchaseDetailComponent } from './puchase-detail.component';

describe('PuchaseDetailComponent', () => {
  let component: PuchaseDetailComponent;
  let fixture: ComponentFixture<PuchaseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuchaseDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuchaseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
