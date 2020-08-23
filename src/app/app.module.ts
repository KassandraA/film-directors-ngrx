import { NgModule } from '@angular/core';

import {
  COMPONENTS,
  ENTRY_COMPONENTS,
  IMPORTS,
  EXPORTS,
  SERVICES,
} from './index';
import { AppComponent } from './components/home-del/app.component';

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...EXPORTS],
  imports: [...IMPORTS],
  providers: [...SERVICES],
  entryComponents: [...ENTRY_COMPONENTS],
  bootstrap: [...ENTRY_COMPONENTS],
})
export class AppModule {}
