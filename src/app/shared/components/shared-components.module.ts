import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CodeExampleComponent } from './code-example/code-example.component';
import { MarkdownModule } from 'ngx-markdown';
import { NgxFluentDesignCardModule, NgxFluentDesignCtaModule } from 'ngx-fluent-design';
import { AppNavigationModule } from './side-nav/app-navigation.module';

const DECLARATIONS: Array<any> = [
    CodeExampleComponent
];

@NgModule({
    imports: [
        CommonModule,
        NgxFluentDesignCardModule,
        MarkdownModule.forChild(),
        NgxFluentDesignCtaModule,
        AppNavigationModule
    ],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS, AppNavigationModule]
})
export class SharedComponentsModule {}
