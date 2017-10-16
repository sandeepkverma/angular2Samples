import 'rxjs/add/operator/switchMap'
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AccountDetailsService } from './account-details.service';
import { Location } from '@angular/common';





@Component({
    selector: 'account-details',
    templateUrl: './account-details.component.html',
    styleUrls: ['./account-details.component.css'],
    providers: [AccountDetailsService]
})

export class AccountDetailsComponent {
    param: Params;
    accountDetails={};
    invoices = [];
    accountId;
    netAmount=0;
    curdOperation=null;
    rejectRevokeText= "reject";

    constructor(private route: ActivatedRoute, private accoutDetailsService: AccountDetailsService,
    private location:Location) {

    }

    ngOnInit(): void {
        this.route.params.subscribe(data => {this.accountId = data['id'];this.getInvoices(data['id'])});
    }

    createInvoice() {
        if(this.curdOperation == null){
        this.accoutDetailsService.createInvoice(this.accountDetails).subscribe(data => {
            this.resetInvoiceForm();
            this.getInvoices(this.accountId);
        })
        }else{
            this.accoutDetailsService.updateInvoice(this.accountDetails).subscribe(data=>{
                this.resetInvoiceForm();
                this.getInvoices(this.accountId);
            })
        }
    }

    getInvoices(accountId){
        this.accoutDetailsService.getInvoices(accountId).subscribe(data=>{
            this.invoices = data.invoices;
            this.setNetAmount();
        });
    }

    setNetAmount(){
        let amount=0;
        for(let index in this.invoices){
            if(!this.invoices[index].ignoreFlag){
            amount+=this.invoices[index].amount;
            }
        }
        this.netAmount = amount;
        
    }

    editInvoice(invoice){

        this.accountDetails['id'] = invoice.id;
        this.accountDetails['name'] = invoice.name;
        this.accountDetails['description'] = invoice.description;
        this.accountDetails['amount'] = invoice.amount;

        this.curdOperation = "U";
    }

    rejectInvoice(invoice){
        let ignoreFlag = !invoice.ignoreFlag;
        this.accoutDetailsService.toggleIgnoreInvoice(invoice.id,ignoreFlag).subscribe(data=>{
            this.getInvoices(this.accountId);
        });

    }

    resetInvoiceForm(){
        this.accountDetails = {};
        this.curdOperation = null;
    }

    gotoBack(){
        this.location.back();
    }



}