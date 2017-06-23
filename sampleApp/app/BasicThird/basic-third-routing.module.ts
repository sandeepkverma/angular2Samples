import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { BasicComponent } from './basic.component';
import { SelectComponent } from './select.component';
import { TableComponent } from './table.component';
import { SliderComponent } from './slider.component';
import { TabsComponent } from './tabs.component';
import { PopupComponent } from './popups.component';

const componentRouting:Routes = [   
    { path : 'basiccomponent' ,component:BasicComponent, children:[
        {
        path: '', redirectTo:'selectcomponent', pathMatch:'full'
        // path:'', component:SelectComponent
        },
        {
            path: 'tablecomponent' , component:TableComponent
        },
        {
            path: 'selectcomponent' ,component:SelectComponent
        },
        {
            path:'slidercomponent' ,component:SliderComponent
        },
        {
            path:'tabscomponent' ,component:TabsComponent
        },
        {
            path:'popupcomponent' , component:PopupComponent
        }
        ]
    }
    
] 


@NgModule({
imports:[RouterModule.forChild(componentRouting)],
exports:[RouterModule]
})


export class BasicThirdRoutingModule { }