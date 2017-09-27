
import { Component,Input } from '@angular/core';

import { ColumnComponent } from './column.component';

@Component({
    selector:'datatable',
    templateUrl:'./datatable.component.html',
    styles:[
        `
       .sortorder:after {
        content: '\25b2';   // BLACK UP-POINTING TRIANGLE
        }
        .sortorder.reverse:after {
                 content: '\25bc';   // BLACK DOWN-POINTING TRIANGLE
          }

        `
    ]
})

export class DataTableComponent {

    @Input() dataset;
    @Input() enableFilter = false;
    columns: ColumnComponent[] = [];
    query = "";
    filteredList;
    reverse = false;
    propertyName;

    addColumn(column){
        this.columns.push(column);
    }   

    getData(){
    if(this.query !== ""){
      return this.filteredList;
    }else{
      return this.dataset;  
    }
  }

  filter(){
    this.filteredList = this.dataset.filter(function(el){
      var result="";
        for(var key in el){
          result+= el[key];
        }
        return result.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
    }.bind(this));
  }

  sort(key){ 
      var dataset = this.getData();
      this.reverse = this.propertyName == key ? !this.reverse : true;
      this.propertyName = key;
      dataset.sort(function(a,b){
          if(this.reverse){
            return a[key].toString().localeCompare(b[key].toString());
          }else{
              return b[key].toString().localeCompare(a[key].toString());
          }
        
      }.bind(this));
  }
 

    
}