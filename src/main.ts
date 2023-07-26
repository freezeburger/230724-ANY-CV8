/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {  APP_INITIALIZER, PLATFORM_INITIALIZER } from '@angular/core';
import { AsyncSubject, fromEvent, of } from 'rxjs';


platformBrowserDynamic(
  [
    {
      provide:PLATFORM_INITIALIZER,
      useValue:()=> console.warn('Platform Initialized'),
      multi:true
    },
    {
      provide:APP_INITIALIZER,
      useValue:()=> console.warn('Application Initialized'),
      multi:true
    },
    {
      provide:APP_INITIALIZER,
      useValue:()=> {
        /*
        const obs$ = new AsyncSubject()
        fromEvent(window,'click').subscribe( () => obs$.complete())
        return obs$;
        */
       return of(true);
      },
      multi:true
    }
  ]
  )
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
