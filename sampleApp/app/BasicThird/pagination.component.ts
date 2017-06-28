import { Component } from '@angular/core';




@Component({
    selector:'pagination-component',
    template:`
    <h3> list of items with pagination </h3>
     <ul>
          <li *ngFor="let item of collection | paginate: { itemsPerPage: 10, currentPage: p }">{{ item }}</li>
    </ul>
        
    <pagination-controls (pageChange)="p = $event"></pagination-controls>
    ` 
})



export class PaginationComponent {

     collection = [];
  constructor() {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }
}