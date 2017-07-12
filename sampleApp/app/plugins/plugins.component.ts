import { Component } from '@angular/core';



@Component({
    selector:'plugin-component',
    template:`
    <nav>
    <ul class="nav">
    <li> <a routerLink="tableplugincomponent" routerLinkActive="active">table plugin</a></li>
    </ul>
    </nav>
    <router-outlet></router-outlet>
    `

})


export class PluginComponent{}