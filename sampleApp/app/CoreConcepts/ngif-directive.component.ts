import { Component } from '@angular/core';


@Component({
    selector:'ngif-directive-component',
    templateUrl:'./ngif-directive-component.html'
})


export class NgIfDirectiveComponent { 

    name:string = 'sandeep';
    appStatus:boolean = true;

    users: any[] = [{
        id:1,
        name:'sandeep kumar'
    },
    {
        id:2,
        name:'sunil kumar'
    },
    {
        id:3,
        name:'sumit'
    }
    ];

}