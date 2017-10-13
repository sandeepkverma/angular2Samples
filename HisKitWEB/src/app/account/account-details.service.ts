import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Constants } from '../constants';

@Injectable()
export class AccountDetailsService {

    constructor(private http: Http) { }

    createInvoice(invoiceInfo) {
        let url = Constants.BASEURL + "createInvoice";
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(invoiceInfo), { headers: headers })
        .map((response: Response)=><any> response.json())
        .do(data=>JSON.stringify(data))
        .catch(this.createInvoiceFailure);

    }
    createInvoiceFailure(error: Response) {
        console.error(error);
        return Observable.throw(error.json());
    }

    updateInvoice(invoiceInfo) {

    }

    updateInvoiceFailure(error: Response) {

    }

    toggleIgnoreInvoice(invoiceId) {

    }

    toggleIgnoreInvoiceFailure(error: Response) {

    }

    getInvoices(accountId) {

    }

    getInvoicesFailure(error: Response) {

    }


}

