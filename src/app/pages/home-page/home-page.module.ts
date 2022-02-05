import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { MarkdownModule } from 'ngx-markdown';
import { NgxFluentDesignCommonComponentsModule, NgxFluentDesignNotificationModule } from 'ngx-fluent-design';

@NgModule({
    imports: [
        FormsModule,
        NgxFluentDesignCommonComponentsModule,
        NgxFluentDesignNotificationModule,
        CommonModule,
        MarkdownModule.forChild()
    ],
    declarations: [
        HomePageComponent
    ]
})
export class HomePageModule {}
