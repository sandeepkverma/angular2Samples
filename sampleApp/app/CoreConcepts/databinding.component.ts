import { Component } from '@angular/core';

@Component({
    selector:'databinding-component',
    template:`
     <div>
     {{tutorialName}}
     </div>
     <div>
     <ul>
     <li *ngFor="let list of appList">{{list}}</li>
     </ul> 
     </div>
    
    `
})


export class DataBindingComponent {


    tutorialName:string = 'data binding';

    appList:any[] = [
        'appList1',
        'appList2',
        'appList3'
    ]

}