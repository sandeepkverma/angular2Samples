import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from './account.service';
import { CreateAccountComponent } from './create.account.component';

declare var $: any;
@Component({
    selector: 'account',
    templateUrl: './account.html',
    styleUrls: ['account.component.css'],
    providers: [AccountService]
})


export class AccountComponent {

    @ViewChild(CreateAccountComponent) createAccountComponent: CreateAccountComponent;

    constructor(private accountService: AccountService,private router:Router) { }

    title: string = 'this is account';
    accounts: any;
    crudOperation: string;

    ngOnInit(): void {
        this.getAccount();
    }

    getAccount() {
        this.accountService.getAccount().subscribe(data => { this.accounts = data.accounts });
    }

    createAccount(accountInfo) {
        if (this.crudOperation !== "U") {
            this.accountService.createAccount(accountInfo).subscribe(data => {
                $("#createaccount").modal("hide");
                alert("account created successfully.");
                this.getAccount();
                this.reset();
            });
        } else {
            this.accountService.updateAccount(accountInfo).subscribe(data => {
                $("#createaccount").modal("hide");
                alert("account updated successfully.");
                this.getAccount();
                this.reset();
            });
        }
    }

    updateAccount(accountInfo) {
        this.crudOperation = "U";
        this.createAccountComponent.id = accountInfo.id;
        this.createAccountComponent.name = accountInfo.name;
        this.createAccountComponent.description = accountInfo.description;
        $("#createaccount").modal("show");
    }

    deleteAccount(accountInfo){
        var flag = confirm("are you sure to delete an account \'"+accountInfo.name+"\'");
        if(flag){ 
        this.accountService.deleteAccount(accountInfo.id).subscribe(data=>{
            alert("account deleted successfully.");
              this.getAccount();
        });
        }
    }

    gotoAccountDetails(accountInfo){
        this.router.navigate(["/accountDetails",accountInfo.id]);
    }

    reset() {
        this.crudOperation = null;
        this.createAccountComponent.resetForm();
    }

}

