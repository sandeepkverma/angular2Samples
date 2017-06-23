import { Component } from '@angular/core';


@Component({
    selector:'core-concepts-component',
    template:`
    <nav>
    <ul>
    <li> <a routerLink="helloworld" routerLinkActive="active">Hello World</a></li>
    <li> <a routerLink="databindingcomponent" routerLinkActive="active">data binding </a></li>
    <li> <a routerLink="directivesample" routerLinkActive="active">directive Sample </a></li>
    </ul>
    </nav>
    <router-outlet></router-outlet>
    `
})

export class CoreConceptComponent {}