import {OPEN_NAVBAR}  from '../../public_api';
import {CLOSE_NAVBAR}  from '../../public_api';
import {Actions} from '../actions/layout';

export interface State {
  shownNavBar: boolean;
}

const initialState: State = {
  shownNavBar: false
};

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case CLOSE_NAVBAR:
      return {
        shownNavBar: false
      };

    case OPEN_NAVBAR:
      return {
        shownNavBar: true
      };

    default:
      return state;
  }
}

export const getShowNavBar = (state: State) => state.shownNavBar;
