import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector:'navigation-component',
    template:'<input type="button" (click)="gotoAsysData()" value="goto AsysData"/>'
})



export class NavigationComponent {

    constructor(private router: Router){ }

    gotoAsysData():void{
        this.router.navigate(['/asysdata']);
    }
}



