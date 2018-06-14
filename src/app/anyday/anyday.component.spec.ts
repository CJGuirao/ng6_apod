import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnydayComponent } from './anyday.component';

describe('AnydayComponent', () => {
  let component: AnydayComponent;
  let fixture: ComponentFixture<AnydayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnydayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnydayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
