import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlunkComponent } from './plunk.component';

describe('PlunkComponent', () => {
  let component: PlunkComponent;
  let fixture: ComponentFixture<PlunkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlunkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlunkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
