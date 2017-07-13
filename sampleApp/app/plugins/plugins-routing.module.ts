
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PluginComponent } from './plugins.component';
import { TablePluginClientComponent } from './table-plugin-client.component';
import { AutocompletePluginClientComponent } from './autocomplete-client.component';



const pluginsRouting:Routes = [   
    { path : 'plugins' ,component:PluginComponent, children:[
        {
        path: '', redirectTo:'tableplugincomponent', pathMatch:'full'
        },
        {
            path:'tableplugincomponent', component:TablePluginClientComponent
        },
        {
            path:'autocompleteplugincomponent' ,component:AutocompletePluginClientComponent
        }
        ]
    }
    
] 


@NgModule({
imports:[RouterModule.forChild(pluginsRouting)],
exports:[RouterModule]
})


export class PluginsRoutingModule { }
