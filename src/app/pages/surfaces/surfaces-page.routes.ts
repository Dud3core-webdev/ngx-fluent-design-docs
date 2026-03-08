import { Routes } from '@angular/router';
import { SurfacesPageComponent } from './surfaces-page.component';
import { CardPageComponent } from './card/card-page.component';
import { DialogPageComponent } from './dialog/dialog-page.component';
import { PanelPageComponent } from './panel/panel-page.component';
import { ModalPageComponent } from './modal/modal-page.component';

export const SURFACES_PAGE_ROUTES: Routes = [
    {
        path: '',
        component: SurfacesPageComponent,
        children: [
            {
                path: 'card',
                component: CardPageComponent
            },
            {
                path: 'dialog',
                component: DialogPageComponent
            },
            {
                path: 'panel',
                component: PanelPageComponent
            },
            {
                path: 'modal',
                component: ModalPageComponent
            }
        ]
    }
];
