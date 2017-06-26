import { Component } from '@angular/core';




@Component({
    selector:'pagination-component',
    template:`
    <h3> list of items with pagination </h3>
     <ul>
          <li *ngFor="let item of items | paginate: { itemsPerPage: 10, currentPage: p }">{{ item.itemName }}</li>
        </ul>
        
        <pagination-controls (pageChange)="p = $event"></pagination-controls>
    ` 
})



export class PaginationComponent {

    items:any[] =[{
        id:1,
        itemName:'item1'
    },
    {
        id:2,
        itemName:'item2'
    },
    {
        id:3,
        itemName:'item3'
    },
    {
        id:4,
        itemName:'item4'
    },
    {
        id:5,
        itemName:'item5'
    },
    {
        id:6,
        itemName:'item6'
    },
    {
        id:7,
        itemName:'item7'
    },
    {
        id:8,
        itemName:'item8'
    },
    {
        id:9,
        itemName:'item9'
    }
    ]
}