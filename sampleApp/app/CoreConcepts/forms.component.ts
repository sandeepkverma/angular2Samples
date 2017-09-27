import { Component } from '@angular/core';
import { Product } from './product';


@Component({
    selector:'forms-component',
    templateUrl:'./forms.component.html'
})


export class FormsComponent {

    model = new Product(1,'detol');

}