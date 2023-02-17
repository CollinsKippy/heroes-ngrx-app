import { createAction, props } from '@ngrx/store';

export const loadHeros = createAction(
  '[Hero] Load Heros'
);

export const loadHerosSuccess = createAction(
  '[Hero] Load Heros Success',
  props<{ data: any }>()
);

export const loadHerosFailure = createAction(
  '[Hero] Load Heros Failure',
  props<{ error: any }>()
);
