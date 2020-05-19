import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseGenerateToolComponent } from './collapse-generate-tool.component';

describe('CollapseGenerateToolComponent', () => {
  let component: CollapseGenerateToolComponent;
  let fixture: ComponentFixture<CollapseGenerateToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseGenerateToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseGenerateToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
