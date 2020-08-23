import {
  HttpClient,
  HttpHandler,
  HttpClientModule,
} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule, ReducerManager } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { filmDirectorsReducer } from './reducers';
import * as components from './components';
import * as effects from './effects';
import * as services from './services';

export const EFFECTS = [effects.FilmDirectorsEffects];

export const COMPONENTS = [
  components.DirectorsHomeComponent,
  components.DirectorDetailComponent,
];

export const EXPORTS = [AppRoutingModule];

export const IMPORTS = [
  BrowserModule,
  HttpClientModule,
  CommonModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  StoreModule.forRoot({}),
  StoreModule.forFeature('filmDirectors', filmDirectorsReducer),
  EffectsModule.forRoot([effects.FilmDirectorsEffects]),
  StoreDevtoolsModule.instrument({ maxAge: 50 }),
];

export const SERVICES = [services.FilmDirectorsService];

export const ENTRY_COMPONENTS = [components.DirectorsHomeComponent];
