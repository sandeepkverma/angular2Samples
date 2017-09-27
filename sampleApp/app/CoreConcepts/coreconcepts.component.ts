import { Component } from '@angular/core';


@Component({
    selector:'core-concepts-component',
    template:`
    <nav>
    <ul class="nav">
    <li> <a routerLink="helloworld" routerLinkActive="active">Hello World</a></li>
    <li> <a routerLink="databindingcomponent" routerLinkActive="active">data binding </a></li>
    <li> <a routerLink="directivesample" routerLinkActive="active">directive Sample </a></li>
    <li> <a routerLink="ngifdirective" routerLinkActive="active">ngif directive</a></li>
    <li> <a routerLink="navigation" routerLinkActive="active">navigation</a></li>
    <li> <a routerLink="formscomponent" routerLinkActive="active">forms</a></li>
    <li> <a routerLink="dependencyinj" routerLinkActive="active">dependency Injection Component</a></li>
    <li> <a routerLink="eventhandling" routerLinkActive="active">event handling</a></li>
    <li> <a routerLink="filters" routerLinkActive="active">filters</a></li>
    <li> <a routerLink="lifecycle" routerLinkActive="active">Lifecycle</a></li>
    <li> <a routerLink="attributecomponent" routerLinkActive="active">Attribute Directive</a></li>
    <li> <a routerLink="structuralcomponent" routerLinkActive="active">Structural Directive</a></li>
    <li> <a routerLink="pipecomponent" routerLinkActive="active">Custom Pipe</a></li>
    </ul>
    </nav>
    <router-outlet></router-outlet>
    `
})

export class CoreConceptComponent {}