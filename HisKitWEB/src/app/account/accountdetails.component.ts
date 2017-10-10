import 'rxjs/add/operator/switchMap'
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';





@Component({
    selector: 'account-details',
    templateUrl: './account-details.component.html',
    styleUrls:['./account-details.component.css']
})

export class AccountDetailsComponent {
    param:Params;   

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit():void{
        this.route.params.subscribe(data=>console.log(data['id']));
    }



}