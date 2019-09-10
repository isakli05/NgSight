import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHealtComponent } from './section-healt.component';

describe('SectionHealtComponent', () => {
  let component: SectionHealtComponent;
  let fixture: ComponentFixture<SectionHealtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionHealtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHealtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
