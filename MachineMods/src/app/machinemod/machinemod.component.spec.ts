import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinemodComponent } from './machinemod.component';

describe('MachinemodComponent', () => {
  let component: MachinemodComponent;
  let fixture: ComponentFixture<MachinemodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachinemodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachinemodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
