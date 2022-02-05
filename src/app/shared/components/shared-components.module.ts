import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeExampleComponent } from './code-example/code-example.component';
import { MarkdownModule } from 'ngx-markdown';
import { NgxFluentDesignCommonComponentsModule, NgxFluentDesignCtaModule } from 'ngx-fluent-design';
import { AppNavigationModule } from './side-nav/app-navigation.module';

const DECLARATIONS: Array<any> = [
    CodeExampleComponent
];

@NgModule({
    imports: [
        CommonModule,
        MarkdownModule.forChild(),
        NgxFluentDesignCtaModule,
        AppNavigationModule,
        NgxFluentDesignCommonComponentsModule
    ],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS, AppNavigationModule]
})
export class SharedComponentsModule {}
