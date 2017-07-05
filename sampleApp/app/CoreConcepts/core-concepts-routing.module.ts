import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataBindingComponent } from './databinding.component';
import { CoreConceptComponent } from './coreconcepts.component';
import { HelloWorldComponent } from './helloworld.component';
import { DirectiveSampleComponent } from './directive-sample.component';
import { NgIfDirectiveComponent } from './ngif-directive.component';
import { NavigationComponent } from './navigation.component';
import { FormsComponent } from './forms.component';
import { DependencyInjectionComponent } from './dependencyinj.component';
import { EventHandlingComponent } from './eventhandling.component';
import { FilterComponent } from './filter.component';






const coreConceptsRouting:Routes = [
    {
        path : 'coreconcept' ,component:CoreConceptComponent,children:[
            {
                path:'' ,redirectTo:'databindingcomponent' ,pathMatch:'full'
            },
            { 
                path:'databindingcomponent' , component:DataBindingComponent
            },
            {
                path:'helloworld' , component:HelloWorldComponent
            },
            {
                path:'directivesample', component:DirectiveSampleComponent
            },
            {
                path:'ngifdirective' , component:NgIfDirectiveComponent
            },
            {
                path:'navigation', component:NavigationComponent
            },
            {
                path:'formscomponent' ,component:FormsComponent
            },
            {
                path:'dependencyinj' , component:DependencyInjectionComponent
            },
            {
                path:'eventhandling', component:EventHandlingComponent
            },
            {
                path:'filters', component:FilterComponent
            }
            

        ] 
    }
]

@NgModule({
    imports:[RouterModule.forChild(coreConceptsRouting)],
    exports:[
        RouterModule
    ]
})

export class CoreConceptsRoutingModule {}
