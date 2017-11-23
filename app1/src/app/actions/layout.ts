import {Action} from '@ngrx/store';
import {OPEN_NAVBAR} from "../../public_api";
import {CLOSE_NAVBAR} from "../../public_api";

export class OpenNavBar implements Action {
  readonly type = OPEN_NAVBAR;
}

export class CloseNavBar implements Action {
  readonly type = CLOSE_NAVBAR;
}

export type Actions = OpenNavBar | CloseNavBar;
