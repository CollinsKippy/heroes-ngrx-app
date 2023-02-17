import { Action, createReducer, on } from '@ngrx/store';


export const heroFeatureKey = 'hero';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

);
