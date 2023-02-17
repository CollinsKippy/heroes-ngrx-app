import { createAction, props } from '@ngrx/store';
import { Hero } from 'src/app/entities/hero';

export const loadHeroes = createAction('[Dashboard Page] Load Heroes');

export const loadHeroesSuccess = createAction('[Dashboard API] Load Heroes Success', props<{ heroes: Hero[]; }>);

export const loadHeroesFailure = createAction('[Dashboard API] Load Heroes Success', props<{ error: any; }>);
