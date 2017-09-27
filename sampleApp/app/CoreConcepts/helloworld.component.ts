import { Component } from '@angular/core';

@Component({
    selector:'helloworld-component',
    template:`
    <h3>
    Hello {{name}} ! Welcom in angular4
    </h3>
    `
})


export class HelloWorldComponent {
    name:string = 'Sandeep Kumar';
}