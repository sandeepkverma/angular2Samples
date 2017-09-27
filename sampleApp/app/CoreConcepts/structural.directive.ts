
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
    selector: '[myUnless]'
})


export class UnlessDirective {

    private hasview: boolean;
    constructor(private templateRef: TemplateRef, private viewContainerRef: ViewContainerRef) { }

    @Input() set myUnless(condition: boolean) {
        if (!condition && !this.hasview) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
            this.hasview = true;
        } else {
            this.viewContainerRef.clear();
            this.hasview = false;
        }
    }

}