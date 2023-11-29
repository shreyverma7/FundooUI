import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcheiveComponent } from './archeive.component';

describe('ArcheiveComponent', () => {
  let component: ArcheiveComponent;
  let fixture: ComponentFixture<ArcheiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArcheiveComponent]
    });
    fixture = TestBed.createComponent(ArcheiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
