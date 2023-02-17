import { loadHeroes, loadHeroesSuccess, loadHeroesFailure } from './hero.actions';
import { createReducer, on, props } from '@ngrx/store';
import { Hero } from 'src/app/entities/hero';

export interface HeroState {
  heroes: Hero[],
  selectedHero: Hero | null,
  isLoading: boolean;
  error: any;
}

export const initialState: HeroState = {
  heroes: [],
  selectedHero: null,
  isLoading: false,
  error: null
};

export const heroReducer = createReducer(
  initialState,
  on(loadHeroes, (state: HeroState) => ({ ...state, isLoading: true })),
  on(loadHeroesSuccess, (state: HeroState, { heroes }) => ({
    ...state, heroes: heroes, isLoading: false
  })),
  on(loadHeroesFailure, (state: HeroState, { error }) => ({
    ...state, heroes: [], isLoading: false, error: error
  })),
);