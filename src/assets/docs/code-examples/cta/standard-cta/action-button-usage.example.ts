import { Component } from '@angular/core';

@Component({
    template: `
        <button ngxFluentDesignActionButton (click)="alert('This is an action button action')">Example Link Button</button>
    `
})
export class LinkButtonUsageExample {}
