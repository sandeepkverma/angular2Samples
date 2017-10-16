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
            .map((response: Response) => <any>response.json())
            .do(data => JSON.stringify(data))
            .catch(this.createInvoiceFailure);

    }
    createInvoiceFailure(error: Response) {
        console.error(error);
        return Observable.throw(error.json());
    }

    updateInvoice(invoiceInfo) {
        let url = Constants.BASEURL + "updateInvoice";
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(invoiceInfo), { headers: headers })
            .map((response: Response) => <any>response.json())
            .do(data => JSON.stringify(data))
            .catch(this.updateInvoiceFailure);
    }

    updateInvoiceFailure(error: Response) {
        console.error(error);
        return Observable.throw(error.json());
    }

    toggleIgnoreInvoice(invoiceId,ignoreFlag) {
         let url = Constants.BASEURL + "toggleIgnoreInvoice";
        let params = new URLSearchParams();
        params.append("invoiceId",invoiceId);
        params.append("ignoreFlag",ignoreFlag);
        return this.http.post(url, params)
            .map((response: Response) => <any>response.json())
            .do(data => JSON.stringify(data))
            .catch(this.toggleIgnoreInvoiceFailure);
    }

    toggleIgnoreInvoiceFailure(error: Response) {
        console.error(error);
        return Observable.throw(error.json());
    }

    getInvoices(accountId) {
        let url = Constants.BASEURL + "getInvoices";
        let params = new URLSearchParams();
        params.append("accountId", accountId);
        return this.http.post(url, params).map((response: Response) => <any>response.json()).do(data => JSON.stringify(data)).catch(this.getInvoicesFailure);

    }

    getInvoicesFailure(error: Response) {
        console.error(error);
        return Observable.throw(error.json());

    }


}

