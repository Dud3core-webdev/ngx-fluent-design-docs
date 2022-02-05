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
    NgxFluentDesignCommonComponentsModule,
    NgxFluentDesignCtaModule,
    NgxFluentDesignInputModule,
    NgxFluentDesignNotificationModule
} from 'ngx-fluent-design';
import { RadioPageComponent } from './pages/radio/radio-page.component';
import { FormFieldUnderlinedPageComponent } from './pages/form-field-underlined/form-field-underlined-page.component';
import { FormFieldBorderlessPageComponent } from './pages/form-field-borderless/form-field-borderless-page.component';

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
        path: 'form-field-underlined',
        component: FormFieldUnderlinedPageComponent
    },
    {
        path: 'form-field-borderless',
        component: FormFieldBorderlessPageComponent
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
    FormFieldPageComponent,
    TogglePageComponent,
    CheckboxPageComponent,
    RadioPageComponent,
    FormFieldUnderlinedPageComponent,
    FormFieldBorderlessPageComponent
];

@NgModule({
    imports: [
        MarkdownModule.forChild(),
        NgxFluentDesignCommonComponentsModule,
        NgxFluentDesignInputModule,
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
