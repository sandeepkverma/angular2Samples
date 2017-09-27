
import { Component } from '@angular/core';


@Component({
    selector:'structural-component',
    template:`
    <h2>{{title}}</h2>
    <p>below is the structural directive which is remove element when flag is true. </p>
    <input type='checkbox' [(ngModel)]='flag' />
    <div *myUnless='flag'>
    this element add or remove based on the checkbox check or uncheck.
    </div>
    `
})


export class StructuralComponent{

    flag:boolean = false;
    
    title:string = 'Structural directive is responsible for html layout. its use to add, remove or modify elements.';
}