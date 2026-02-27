import { Component, Input, OnInit } from '@angular/core';
import { ComponentApiDataList } from './types/component-api-data.class';

@Component({
    standalone: false,
    selector: 'component-api-table',
    templateUrl: './component-api-table.component.html',
    styleUrls: ['./component-api-table.component.scss']
})
export class ComponentApiTableComponent {
    @Input() public data: ComponentApiDataList = [];
}
