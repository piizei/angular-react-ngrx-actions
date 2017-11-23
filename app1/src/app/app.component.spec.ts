import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ToggleComponent } from './toggle/toggle.component';
import { NavBarComponent} from './nav-bar/nav-bar.component';
import { StoreModule} from '@ngrx/store';
import * as fromRoot from './reducers';
import { RemoteActionService } from './remote-action.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers
        }),
      ],
      declarations: [
        AppComponent,
        ToggleComponent,
        NavBarComponent,
      ],
      providers: [
        RemoteActionService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'App 1'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('App 1');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to App 1!');
  }));
});
