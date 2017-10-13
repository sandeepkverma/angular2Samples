import 'rxjs/add/operator/switchMap'
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AccountDetailsService } from './account-details.service';





@Component({
    selector: 'account-details',
    templateUrl: './account-details.component.html',
    styleUrls: ['./account-details.component.css'],
    providers: [AccountDetailsService]
})

export class AccountDetailsComponent {
    param: Params;

    constructor(private route: ActivatedRoute, private accoutDetailsService: AccountDetailsService) {

    }

    ngOnInit(): void {
        let obj = {
            name:"Orange",
            description:"1 kg Orange",
            amount:60
        }

        this.accoutDetailsService.createInvoice(obj).subscribe(data=>{
            console.log(data);
        })

        this.route.params.subscribe(data => console.log(data['id']));
    }



}