import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { AsysDataComponent } from '../app/AsyscData/asysdata.component';
import { PageNotFoundComponent } from './pagenotfound.component';
// import { PluginComponent } from '../app/plugins/plugnis.component';
// import { CoreConceptComponent } from '../app/CoreConcepts/coreconcepts.component';


const appRoutes:Routes = [
    { path : 'asysdata' ,component:AsysDataComponent},
    // { path : 'coreconcept' ,component:CoreConceptComponent},
    // { path:'plugins', component:PluginComponent },
    { path : '',redirectTo:'basiccomponent',pathMatch:'full' },
    { path : '**' ,component:PageNotFoundComponent}
]



@NgModule({
imports:[RouterModule.forRoot(appRoutes,{ useHash: true })],
declarations:[PageNotFoundComponent], 
exports:[
    RouterModule
]
})

export class AppRoutingModule{}
