import { Component } from '@angular/core';

@Component({
    selector:'basic-components',
    template:`
    <nav>
    <ul class="nav">
    <li> <a routerLink="selectcomponent" routerLinkActive="active">select component</a></li>
    <li> <a routerLink="tablecomponent" routerLinkActive="active">table component</a></li>
    <li> <a routerLink="slidercomponent" routerLinkActive="active">slider component</a></li>
    <li> <a routerLink="tabscomponent" routerLinkActive="active">tabs component</a></li>
    <li> <a routerLink="popupcomponent" routerLinkActive="active">popup component</a></li>
    <li> <a routerLink="paginationcomponent" routerLinkActive="active">pagination component</a></li>

    </ul>
    </nav>
    <router-outlet></router-outlet>
    `
}) 


export class BasicComponent {}