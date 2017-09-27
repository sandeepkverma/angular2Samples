
import { Component,OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';


@Component({
    selector: 'lifecycle-component',
    templateUrl: './lifecycle.component.html'
})


export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    title: string = 'view console to see log of lifecycle hooks';

    constructor() {
        console.log('0. in constructor.....');
    }

    ngOnChanges(){
        console.log('1. in ngonchanges.......');
    }

    ngOnInit() {
        console.log('2. in initialization .........');
    }

    ngDoCheck(){
        console.log('3. in ng DoCheck........');
    }

    ngAfterContentInit(){
        console.log('4. in ngaftercontentinit.......');
    }

    ngAfterContentChecked(){
        console.log('5. in ngaftercontentchecked......');
    }

    ngAfterViewInit(){
        console.log('6. in ngafterviewinit.........');
    }

    ngAfterViewChecked(){
        console.log('7. in ngafterviewchecked.........');
    }

    ngOnDestroy(){
        console.log('in ngOnDestroy.......');
    }
}