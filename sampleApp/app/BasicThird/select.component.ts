import { Component } from '@angular/core';


@Component({
    selector:'select-component',
    template:`
    <h3>basic single selection select2</h3>

    <ng-select
	[options]="options" (selected)="onSelected($event)">
	</ng-select>

	{{singleSelection}}

    `
})

export class SelectComponent {


      options = [];
	  singleSelection;
	  multiSelection;
	  	
	  
        
    constructor() {
		for(let i =0; i<100; i++){
		var obj = {
			value:i,
			label:'label'+i
		}

		this.options.push(obj);
	  }        
    }

	onSelected(item) {
	this.singleSelection = item.value;
}

	



 }