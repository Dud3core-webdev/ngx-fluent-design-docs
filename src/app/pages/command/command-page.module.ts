import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CommandPageComponent } from './command-page.component';
import { PivotPageComponent } from './pages/pivot/pivot-page.component';
import { NgxFluentDesignCommandModule } from 'ngx-fluent-design';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';

const ROUTES: Routes = [
    {
        path: 'pivot',
        component: PivotPageComponent
    }
];

const DECLARATIONS = [
    CommandPageComponent,
    PivotPageComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        NgxFluentDesignCommandModule,
        SharedComponentsModule
    ],
    declarations: [...DECLARATIONS]
})
export class CommandPageModule {}

