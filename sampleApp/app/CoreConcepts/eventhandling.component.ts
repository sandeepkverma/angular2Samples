import { Component } from '@angular/core';


@Component({

    selector:'eventhandling-component',
    template:`

        <div>
        status: {{status}}
            <input type="button" (click)="clicked()" value="click"/>
        </div>
    
    `

})



export class EventHandlingComponent {

    status:boolean = false;

    clicked(event){
        this.status = ! this.status;
    }
} 