import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { InputsPageComponent } from './inputs-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { RouterModule, Routes } from '@angular/router';
import { FormFieldPageComponent } from './pages/form-field/form-field-page.component';
import { TogglePageComponent } from './pages/toggle/toggle-page.component';
import { CheckboxPageComponent } from './pages/checkbox/checkbox-page.component';
import {
    NgxFluentDesignCtaModule,
    NgxFluentDesignInputModule,
    NgxFluentDesignNotificationModule, NgxFluentDesignSurfaceModule
} from 'ngx-fluent-design';
import { RadioPageComponent } from './pages/radio/radio-page.component';
import { FormFieldUnderlinedPageComponent } from './pages/form-field-underlined/form-field-underlined-page.component';
import { FormFieldBorderlessPageComponent } from './pages/form-field-borderless/form-field-borderless-page.component';
import { TextAreaPageComponent } from './pages/textarea/text-area-page.component';
import { TextAreaUnderlinedPageComponent } from './pages/textarea-underlined/text-area-underlined-page.component';
import { TextAreaBorderlessPageComponent } from './pages/textarea-borderless/text-area-borderless-page.component';

const ROUTES: Routes = [
    {
        path: 'checkbox',
        component: CheckboxPageComponent
    },
    {
        path: 'form-field',
        component: FormFieldPageComponent
    },
    {
        path: 'text-area',
        component: TextAreaPageComponent
    },
    {
        path: 'form-field-underlined',
        component: FormFieldUnderlinedPageComponent
    },
    {
        path: 'text-area-underlined',
        component: TextAreaUnderlinedPageComponent
    },
    {
        path: 'form-field-borderless',
        component: FormFieldBorderlessPageComponent
    },
    {
        path: 'text-area-borderless',
        component: TextAreaBorderlessPageComponent
    },
    {
        path: 'radio',
        component: RadioPageComponent
    },
    {
        path: 'toggle',
        component: TogglePageComponent
    }
];

const DECLARATIONS: Array<any> = [
    InputsPageComponent,
    TogglePageComponent,
    CheckboxPageComponent,
    RadioPageComponent,
    FormFieldPageComponent,
    FormFieldUnderlinedPageComponent,
    FormFieldBorderlessPageComponent,
    TextAreaPageComponent,
    TextAreaUnderlinedPageComponent,
    TextAreaBorderlessPageComponent
];

@NgModule({
    imports: [
        MarkdownModule.forChild(),
        NgxFluentDesignInputModule,
        NgxFluentDesignSurfaceModule,
        NgxFluentDesignCtaModule,
        ReactiveFormsModule,
        CommonModule,
        SharedComponentsModule,
        RouterModule.forChild(ROUTES),
        NgxFluentDesignNotificationModule
    ],
    declarations: [...DECLARATIONS],
})
export class InputsPageModule {
}
