import { NgModule } from '@angular/core';
import { NotificationsPageComponent } from './notifications-page.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { RouterModule, Routes } from '@angular/router';
import { MessageBarPageComponent } from './pages/message-bar/message-bar-page.component';
import {
    NgxFluentDesignSurfaceModule,
    NgxFluentDesignNotificationModule,
    NgxFluentDesignCtaModule,
    NgxFluentDesignInputModule
} from 'ngx-fluent-design';
import { ReactiveFormsModule } from '@angular/forms';

const ROUTES: Routes = [
    {
        path: 'message-bar',
        component: MessageBarPageComponent
    }
];

const DECLARATIONS = [
    NotificationsPageComponent,
    MessageBarPageComponent
];

@NgModule({
    imports: [
        NgxFluentDesignNotificationModule,
        NgxFluentDesignSurfaceModule,
        SharedComponentsModule,
        RouterModule.forChild(ROUTES),
        NgxFluentDesignCtaModule,
        NgxFluentDesignInputModule,
        ReactiveFormsModule
    ],
    declarations: [DECLARATIONS]
})
export class NotificationsPageModule {}
