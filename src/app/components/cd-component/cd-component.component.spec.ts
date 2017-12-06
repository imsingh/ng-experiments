import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdComponentComponent } from './cd-component.component';

describe('CdComponentComponent', () => {
  let component: CdComponentComponent;
  let fixture: ComponentFixture<CdComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
