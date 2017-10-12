import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOutletComponent } from './modal-outlet.component';
import { ModalsModule } from './modals.module';

describe('ModalOutletComponent', () => {
  let component: ModalOutletComponent;
  let fixture: ComponentFixture<ModalOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ModalsModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
