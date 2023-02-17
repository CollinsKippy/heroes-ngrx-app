import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { HeroListComponent } from "./components/hero-list/hero-list.component";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { heroReducer } from './state/hero/hero.reducers';
import { EffectsModule } from '@ngrx/effects';
import { HeroEffects } from './state/hero/hero.effects';
import * as fromHero from './state/hero/hero.reducer';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: !isDevMode(),
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        }),

        MatDividerModule,
        MatSnackBarModule,

        HeroListComponent,
        NavBarComponent,

        AppRoutingModule,

        StoreModule.forRoot({ hero: heroReducer }, {}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
        EffectsModule.forRoot([HeroEffects]),
        StoreModule.forFeature(fromHero.heroFeatureKey, fromHero.reducer),
    ]
})
export class AppModule { }
