import { Component } from '@angular/core';


@Component({
    selector:'table-plugin-client',
    template:`
    <datatable [dataset]=dataset [enableFilter]=true>
    <column [value]="'id'" [header]="'ID'">
    </column>
    <column [value]="'name'" [header]="'NAME'">
    </column>
    <column [value]="'age'" [header]="'AGE'">
    </column>
    </datatable>

    `
})


export class TablePluginClientComponent {

    dataset;

    constructor(){
        this.dataset=[
            {
            id:1,
            name:'sandeep kumar',
            age:26
        },
        {
            id:2,
            name:'Naresh kumar',
            age:24
        }
        ]
    }
}