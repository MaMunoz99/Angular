import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoComponenteComponent } from './nuevo-componente.component';

describe('NuevoComponenteComponent', () => {
  let component: NuevoComponenteComponent;
  let fixture: ComponentFixture<NuevoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
