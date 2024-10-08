import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaMascotaComponent } from './vista-mascota.component';

describe('VistaMascotaComponent', () => {
  let component: VistaMascotaComponent;
  let fixture: ComponentFixture<VistaMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaMascotaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
