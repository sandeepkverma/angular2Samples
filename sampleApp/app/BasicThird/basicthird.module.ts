import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { BasicComponent } from './basic.component';
import { BasicThirdRoutingModule } from './basic-third-routing.module';
import { SelectComponent } from './select.component';
import { TableComponent } from './table.component';
import { SliderComponent } from './slider.component';
import { TabsComponent } from './tabs.component';
import { PopupComponent } from './popups.component';
import { PaginationComponent } from './pagination.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {SelectModule} from 'angular2-select';



@NgModule({
    imports:[CommonModule,FormsModule,NgxPaginationModule,SelectModule,BasicThirdRoutingModule],
    
    declarations:[BasicComponent,SelectComponent,TableComponent
    ,SliderComponent,TabsComponent,PopupComponent,PaginationComponent]
})

export class BasicThirdModule { }

