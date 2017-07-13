import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PluginComponent } from './plugins.component';
import { PluginsRoutingModule } from './plugins-routing.module';
import { TablePluginClientComponent } from './table-plugin-client.component';
import { DataTableComponent } from './table/datatable.component';
import { ColumnComponent } from './table/column.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { AutocompletePluginClientComponent } from './autocomplete-client.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';



@NgModule({

    imports:[CommonModule,FormsModule,Angular2FontawesomeModule,PluginsRoutingModule],
    declarations:[PluginComponent,TablePluginClientComponent,DataTableComponent,ColumnComponent,AutocompletePluginClientComponent,AutocompleteComponent]
})


export class PluginsModule {}