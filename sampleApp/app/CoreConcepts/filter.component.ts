import { Component } from '@angular/core';



@Component({

    selector:'filter-component',
    template:`

        <div>
        <ul>
        
        <li *ngFor="let list of appList">{{list|uppercase}}</li>
        </ul>
        <h3> here we are using custom filter</h3>
        <h4>{{2 | multiplier: 20}}</h4>
        </div>

    `
})



export class FilterComponent{

        appList:any[] = [
            'appList1',
            'appList2',
            'appList3',
            'appList4'
        ]
}