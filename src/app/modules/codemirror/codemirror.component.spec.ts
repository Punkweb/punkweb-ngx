import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeMirrorModule } from './codemirror.module';
import { CodeMirrorComponent } from './codemirror.component';

describe('CodeMirrorComponent', () => {
  let component: CodeMirrorComponent;
  let fixture: ComponentFixture<CodeMirrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CodeMirrorModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeMirrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
