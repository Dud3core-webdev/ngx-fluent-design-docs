import { Component, Input } from '@angular/core';
import { NgxFluentDesignCardComponent } from 'ngx-fluent-design';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
    selector: 'code-example',
    standalone: true,
    templateUrl: './code-example.component.html',
    styleUrls: ['./code-example.component.scss'],
    imports: [NgxFluentDesignCardComponent, MarkdownComponent]
})
export class CodeExampleComponent {
    @Input() public codeExampleUrl: string = '';
    @Input() public title: string = '';
    @Input() public isUsageDocumentation: boolean = true;
}
