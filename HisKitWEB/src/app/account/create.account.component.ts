import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'createAccount',
    template: `
    
   
    <div class="modal fade" id="createaccount" role="dialog">
     
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Create An Account </h4>
                    
                </div>
                <div class="modal-body">
                
             <form class="form-horizontal">
                <div class="form-group">
                    <label class="control-label col-sm-2" for="name">Name:</label>
                    <div class="col-sm-10">
                    <input type="text" [(ngModel)]="name" class="form-control" id="name" name="name"  placeholder="Enter account name">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="desc">description:</label>
                    <div class="col-sm-10"> 
                    <input type="text" [(ngModel)]="description"  class="form-control" id="desc" name="desc" placeholder="Enter account description">
                    </div>
                </div>
               
                </form>
                </div>
                <div class="modal-footer">
                    <button type="submit" (click)="createAccountCompleted()"  class="btn btn-default">Submit</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>

        </div>
    </div>

     <input type="button" class="btn btn-primary" data-toggle="modal" data-target="#createaccount" value="+Account" />
    
    `
})


export class CreateAccountComponent {
    id:string;
    name: string;
    description: string;

    @Output()
    createAccount: EventEmitter<Object> = new EventEmitter();

    createAccountCompleted() {
       
        this.createAccount.emit({ id:this.id,name: this.name, description: this.description });
    }

    resetForm(){
        this.id = null;
        this.name=null;
        this.description = null;

    }



}