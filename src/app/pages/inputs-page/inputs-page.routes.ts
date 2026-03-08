import { Routes } from '@angular/router';
import { InputsPageComponent } from './inputs-page.component';
import { CheckboxPageComponent } from './pages/checkbox/checkbox-page.component';
import { FormFieldPageComponent } from './pages/form-field/form-field-page.component';
import { TextAreaPageComponent } from './pages/textarea/text-area-page.component';
import { FormFieldUnderlinedPageComponent } from './pages/form-field-underlined/form-field-underlined-page.component';
import { TextAreaUnderlinedPageComponent } from './pages/textarea-underlined/text-area-underlined-page.component';
import { FormFieldBorderlessPageComponent } from './pages/form-field-borderless/form-field-borderless-page.component';
import { TextAreaBorderlessPageComponent } from './pages/textarea-borderless/text-area-borderless-page.component';
import { RadioPageComponent } from './pages/radio/radio-page.component';
import { TogglePageComponent } from './pages/toggle/toggle-page.component';
import { SelectPageComponent } from './pages/select/select.page.component';

export const INPUTS_PAGE_ROUTES: Routes = [
    {
        path: '',
        component: InputsPageComponent,
        children: [
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
            },
            {
                path: 'select',
                component: SelectPageComponent
            }
        ]
    }
];
