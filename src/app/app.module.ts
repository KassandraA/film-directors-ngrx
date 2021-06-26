import { NgModule } from '@angular/core';

import {
  COMPONENTS,
  ENTRY_COMPONENTS,
  IMPORTS,
  EXPORTS,
  SERVICES,
  MATERIAL,
} from './index';

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...EXPORTS, ...MATERIAL],
  imports: [...IMPORTS, ...MATERIAL],
  providers: [...SERVICES],
  entryComponents: [...ENTRY_COMPONENTS],
  bootstrap: [...ENTRY_COMPONENTS],
})
export class AppModule {}
