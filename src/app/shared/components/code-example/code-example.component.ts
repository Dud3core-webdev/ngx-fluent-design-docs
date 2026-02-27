import { Component, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'code-example',
    templateUrl: './code-example.component.html',
    styleUrls: ['./code-example.component.scss']
})
export class CodeExampleComponent {
    @Input() public codeExampleUrl: string = '';
    @Input() public title: string = '';
    @Input() public isUsageDocumentation: boolean = true;
}
