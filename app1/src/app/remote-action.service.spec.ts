import { TestBed, inject } from '@angular/core/testing';
import { StoreModule} from '@ngrx/store';
import * as fromRoot from './reducers';
import { RemoteActionService } from './remote-action.service';

describe('RemoteActionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers
        }),
      ],
      providers: [RemoteActionService]
    });
  });

  it('should be created', inject([RemoteActionService], (service: RemoteActionService) => {
    expect(service).toBeTruthy();
  }));
});
