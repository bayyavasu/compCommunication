import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InnercompComponent } from './innercomp/innercomp.component';
import{StudentmoduleModule} from './studentmodule/studentmodule.module';

@NgModule({
  declarations: [
    AppComponent,
    InnercompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,StudentmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
