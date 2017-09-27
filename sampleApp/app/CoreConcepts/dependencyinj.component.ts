import { Component } from '@angular/core';


import { TestService } from './test.service';


@Component({
    selector:'dependency-component',
    template:'<h3>{{msg}}</h3>',
    providers:[TestService]
})
 


export class DependencyInjectionComponent {
    
    constructor(private testService:TestService){}
    msg = this.testService.getHello();
}