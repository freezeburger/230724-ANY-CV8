import { NgModule } from '@angular/core';
import { NgImportModule } from './ng-import.module';
import { CeImportModule } from './ce-import.module';
import { BsImportModule } from './bs-import.module';

@NgModule({
  exports: [
    NgImportModule,
    CeImportModule,
    BsImportModule
  ]
})
export class SharedModule { }
