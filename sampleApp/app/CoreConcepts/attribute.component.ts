
import { Component } from '@angular/core';


@Component({
    selector:'attribute-component',
    template:`
    <h2>{{title}}</h2>
    <p [myHighlight]='color'>Highlight me!</p>
    `
})

export class AttributeComponent{
    color:string = 'green';
    title:string = 'Attribute directive change appearance or the behaviour of the element, directive,component etc. ===> below element uses the custom '
    +'attribute directive.';
}