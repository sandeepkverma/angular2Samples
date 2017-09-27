import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './account/accounts.component';
import { PageNotFoundComponent } from './pagenotfound.component';

const appRouting: Routes = [{
    path: 'home', component: AccountComponent
},
{
    path: '', component: AccountComponent, pathMatch: 'full'
},
{
    path: '**', component: PageNotFoundComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(appRouting, { useHash: true })],
    exports: [RouterModule]

})

export class AppRoutingModule {

}
