import { Component, Input, OnInit } from '@angular/core';
import { ComponentApiDataList } from './types/component-api-data.class';
import { NgxFluentDesignCardComponent } from 'ngx-fluent-design';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'component-api-table',
    standalone: true,
    templateUrl: './component-api-table.component.html',
    styleUrls: ['./component-api-table.component.scss'],
    imports: [NgxFluentDesignCardComponent, JsonPipe]
})
export class ComponentApiTableComponent {
    @Input() public data: ComponentApiDataList = [];
}
