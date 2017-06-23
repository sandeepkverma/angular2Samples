import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataBindingComponent } from './databinding.component';
import { CoreConceptComponent } from './coreconcepts.component';
import { HelloWorldComponent } from './helloworld.component';
import { DirectiveSampleComponent } from './directive-sample.component';





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
