import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { MarkdownModule } from 'ngx-markdown';
import { NgxFluentDesignCtaModule, NgxFluentDesignInputModule, NgxFluentDesignNotificationModule, NgxFluentDesignProgressModule, NgxFluentDesignSurfaceModule } from 'ngx-fluent-design';
import { PaletteGenerationPageComponent } from './palette-generation-page/palette-generation-page.component';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionPageComponent } from './introduction-page/introduction-page.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';

const DECLARATIONS: Array<any> = [
    PaletteGenerationPageComponent,
    IntroductionPageComponent,
    HomePageComponent
];

const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        path: 'welcome',
        component: IntroductionPageComponent
    },
    {
        path: 'generate-palette',
        component: PaletteGenerationPageComponent
    }
];

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        NgxFluentDesignSurfaceModule,
        NgxFluentDesignNotificationModule,
        CommonModule,
        RouterModule.forChild(ROUTES),
        MarkdownModule.forChild(),
        NgxFluentDesignInputModule,
        NgxFluentDesignCtaModule,
        NgxFluentDesignProgressModule,
        SharedComponentsModule
    ],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class HomePageModule {
}
