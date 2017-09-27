import { Component } from '@angular/core';

import { TabComponent } from './tab.component';



@Component({
    selector:'tabs',
    templateUrl:'./tabs.component.html'

})


export class TabsComponent{

    tabs:TabComponent[] = [];

    ngAfterContentInit(){
        let activeTabs = this.tabs.filter((tab) => tab.active);
        if(activeTabs.length == 0){
            this.selectTab(this.tabs[0]);
        }
        
    }

    addTab(tab){
        this.tabs.push(tab);
    }

    selectTab(tab:TabComponent){
        this.tabs.forEach(tab => tab.active = false);
        tab.active = true;
    }
    
}