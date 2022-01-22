import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { CodeExampleComponent } from './code-example/code-example.component';
import { MarkdownModule } from 'ngx-markdown';
import { NgxFluentDesignCardModule, NgxFluentDesignCtaModule } from 'ngx-fluent-design';

const DECLARATIONS: Array<any> = [
    SideNavComponent,
    CodeExampleComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgxFluentDesignCardModule,
        MarkdownModule.forChild(),
        NgxFluentDesignCtaModule
    ],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class SharedComponentsModule {}
