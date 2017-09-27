import { Component } from '@angular/core';
import { AccountService } from './account.service';
declare var $:any;
@Component({
    selector: 'account',
    templateUrl: './account.html',
    styleUrls: ['account.component.css'],
    providers: [AccountService]
})


export class AccountComponent {

    constructor(private accountService: AccountService) { }

    title: string = 'this is account';
    accounts:any;

    ngOnInit(): void {
        this.getAccount();
    } 

    getAccount() { 
        this.accountService.getAccount().subscribe(data => { this.accounts = data.accounts });
    }

    createAccount(accountInfo) {
        this.accountService.createAccount(accountInfo).subscribe(data => { console.log(data);$("#createaccount").modal("hide");  });
    }

}

