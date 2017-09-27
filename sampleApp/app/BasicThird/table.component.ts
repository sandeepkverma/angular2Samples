import { Component } from '@angular/core';


@Component({
    selector:'table-component',
    template:`table-component`
})


export class TableComponent {

    settings = {
  columns: {
    id: {
      title: 'ID'
    },
    name: {
      title: 'Full Name'
    },
    username: {
      title: 'User Name'
    },
    email: {
      title: 'Email'
    }
  }
};

}