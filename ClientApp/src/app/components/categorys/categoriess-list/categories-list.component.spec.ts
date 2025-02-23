import { ComponentFixture, TestBed } from '@angular/core/testing';

import { categoriesListComponent } from './categories-list.component';

describe('categoriesListComponent', () => {
  let component: categoriesListComponent;
  let fixture: ComponentFixture<categoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ categoriesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(categoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
