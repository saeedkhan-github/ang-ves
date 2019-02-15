import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdFormsComponent } from './td-forms.component';

describe('TdFormsComponent', () => {
  let component: TdFormsComponent;
  let fixture: ComponentFixture<TdFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
