import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { heroReducer, HeroState } from '../state/hero/hero.reducers';


export interface State {
  hero: HeroState;
}

export const reducers: ActionReducerMap<State> = {
  hero: heroReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
