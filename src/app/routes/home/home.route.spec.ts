import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../../app.module';
import { HomeRoute } from './home.route';

describe('HomeRoute', () => {
  let component: HomeRoute;
  let fixture: ComponentFixture<HomeRoute>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
