import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperFooterComponent } from './upper-footer.component';

describe('UpperFooterComponent', () => {
  let component: UpperFooterComponent;
  let fixture: ComponentFixture<UpperFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpperFooterComponent]
    });
    fixture = TestBed.createComponent(UpperFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
