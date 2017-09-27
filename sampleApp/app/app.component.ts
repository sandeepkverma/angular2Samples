import { Component } from '@angular/core';

@Component({
    selector:'my-app',
    template:`
    <ul class="nav">
    <li> <a routerLink="/basiccomponent" routerLinkActive="active">Basic third </a></li>
    <li> <a routerLink="/asysdata" routerLinkActive="active">AsysData</a></li>
    <li> <a routerLink="/coreconcept" routerLinkActive="active">Core Concept</a></li> 
    <li> <a routerLink="/plugins" routerLinkActive="active">Plugins</a></li> 
    </ul>
    <router-outlet></router-outlet> 
    `
}) 

export class AppComponent { 
    name:string = 'sandeep';
}   