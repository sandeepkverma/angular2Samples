
import { Component } from '@angular/core';


@Component({
    selector:'pipe-component',
    template:`
    
    <h2>{{title}}</h2>

    <div>date without pipe </div>
    <p>{{dateWithoutPipe}}</p>

    <div>date with pipe </div>
    <p>{{dateWithoutPipe|datepipe}}</p>
    

    `
})


export class PipeComponent{

    title:string = 'Pipes are used for data transformation. To show meaningful things to users.'

    dateWithoutPipe:string = new Date().toString();
}