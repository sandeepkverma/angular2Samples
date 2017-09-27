
import { Component,Input } from '@angular/core';

import { DataTableComponent } from './datatable.component';

@Component({
    selector:'column',
    template:''
})


export class ColumnComponent {
    
    @Input() value;
    @Input() header;

    constructor(datatable:DataTableComponent){
        datatable.addColumn(this);
    }
}