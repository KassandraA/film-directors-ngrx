import {
  HttpClient,
  HttpHandler,
  HttpClientModule,
} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {
  MatPseudoCheckboxModule,
  MatNativeDateModule,
} from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

import { StoreModule, ReducerManager } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { filmDirectorsReducer } from './reducers';
import * as components from './components';
import * as effects from './effects';
import * as services from './services';
import * as utils from './shared/utils';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const EFFECTS = [effects.FilmDirectorsEffects];

export const COMPONENTS = [
  components.DirectorsHomeComponent,
  components.DirectorDetailComponent,
  utils.MultiselectComponent,
];

export const EXPORTS = [AppRoutingModule];

export const IMPORTS = [
  BrowserModule,
  HttpClientModule,
  CommonModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  FormsModule,
  ReactiveFormsModule,
  MatNativeDateModule,
  StoreModule.forRoot({}),
  StoreModule.forFeature('filmDirectors', filmDirectorsReducer),
  EffectsModule.forRoot([effects.FilmDirectorsEffects]),
  StoreDevtoolsModule.instrument({ maxAge: 50 }),
];

export const SERVICES = [services.FilmDirectorsService];

export const ENTRY_COMPONENTS = [components.DirectorsHomeComponent];

export const MATERIAL = [
  MatAutocompleteModule,
  MatPseudoCheckboxModule,
  MatListModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatInputModule,
];
