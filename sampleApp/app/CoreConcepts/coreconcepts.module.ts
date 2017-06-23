import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { DataBindingComponent } from './databinding.component';
import { CoreConceptComponent } from './coreconcepts.component';
import { CoreConceptsRoutingModule } from './core-concepts-routing.module';
import { HelloWorldComponent } from './helloworld.component';
import { DirectiveComponent } from './directive.component';
import { DirectiveSampleComponent } from './directive-sample.component';

@NgModule({
    imports:[CommonModule,FormsModule,CoreConceptsRoutingModule],
    declarations:[DataBindingComponent,CoreConceptComponent,HelloWorldComponent, 
    DirectiveComponent, DirectiveSampleComponent]
})


export class CoreConceptsModule { }