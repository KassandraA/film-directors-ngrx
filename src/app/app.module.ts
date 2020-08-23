import { NgModule } from '@angular/core';
import {
  HttpClient,
  HttpHandler,
  HttpClientModule,
} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule, ReducerManager } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as components from './components';
import * as effects from './effects';
import * as services from './services';
import { filmDirectorsReducer } from './reducers';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    components.DirectorsHomeComponent,
    components.DirectorDetailComponent,
  ],
  exports: [AppRoutingModule],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('filmDirectors', filmDirectorsReducer),
    EffectsModule.forRoot([effects.FilmDirectorsEffects]),
  ],
  providers: [services.FilmDirectorsService],
  bootstrap: [components.DirectorsHomeComponent],
  entryComponents: [components.DirectorsHomeComponent],
})
export class AppModule {}
