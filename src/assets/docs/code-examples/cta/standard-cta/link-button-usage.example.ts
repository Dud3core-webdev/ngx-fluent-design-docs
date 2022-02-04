import { Component } from '@angular/core';

@Component({
    template: `
        <button ngxFluentDesignLinkButton (click)="alert('This is a link button action')">Example Link Button</button>
    `
})
export class LinkButtonUsageExample {}
