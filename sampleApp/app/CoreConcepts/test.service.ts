import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
    
    getHello():string{
        return 'hello from service';
    }

}