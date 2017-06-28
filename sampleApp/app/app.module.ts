import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import { AsysDataComponent } from '../app/AsyscData/asysdata.component';
import { AppRoutingModule } from './app-routing.module';
import { BasicThirdModule } from '../app/BasicThird/basicthird.module';
import { CoreConceptsModule } from '../app/CoreConcepts/coreconcepts.module';
import { PluginComponent } from '../app/plugins/plugnis.component';


@NgModule({
    imports:[BrowserModule,FormsModule,BasicThirdModule,CoreConceptsModule,AppRoutingModule],
    declarations:[AppComponent,AsysDataComponent,PluginComponent],
    bootstrap:[AppComponent]
})
 
export class AppModule { };

