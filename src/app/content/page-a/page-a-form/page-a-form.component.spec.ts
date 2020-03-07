import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAFormComponent } from './page-a-form.component';

describe('PageAFormComponent', () => {
  let component: PageAFormComponent;
  let fixture: ComponentFixture<PageAFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
