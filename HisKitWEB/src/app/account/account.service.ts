import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


import { Constants } from '../constants';

@Injectable()
export class AccountService {
    constructor(private http: Http) { }

    name;
    describe;

    getAccount() {
        let url = 'assets/account.json';

        return this.http.get("http://10.10.21.109:8080/HisKit/getAccounts").map((response: Response) => <any>response.json()).do(data => JSON.stringify(data)).catch(this.getAccoutFailure);
    }

    private getAccoutFailure(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error());
    }
    createAccount(accountInfo) {
        let url = Constants.BASEURL + "createAccount";
        // let params = new URLSearchParams("name="+accountInfo.name+"&description="+accountInfo.description);
        let params = new URLSearchParams();
        params.append("name", accountInfo.name);
        params.append("description", accountInfo.description);
        return this.http.post(url, params).map((response: Response) => <any>response.json()).do(data => JSON.stringify(data)).catch(this.createAccountFailure);
    }

    private createAccountFailure(error: Response) {
        console.error(error);
        return Observable.throw(error.json());
    }

    updateAccount(accountInfo){
        let url = Constants.BASEURL+"/updateAccount";
        let params = new URLSearchParams();
        params.append("id",accountInfo.id);
        params.append("name",accountInfo.name);
        params.append("description",accountInfo.description);

        return this.http.post(url,params).map((response:Response) => <any> response.json()).do(data=>JSON.stringify(data)).catch(this.updateAccountFailure);

    }

    updateAccountFailure(error:Response){
        console.error(error);
        return Observable.throw(error.json());
        
    }
} 