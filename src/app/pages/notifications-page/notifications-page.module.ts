import { NgModule } from '@angular/core';
import { NotificationsPageComponent } from './notifications-page.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { RouterModule } from '@angular/router';
import { MessageBarPageComponent } from './pages/message-bar/message-bar-page.component';
import { NgxFluentDesignCardModule, NgxFluentDesignNotificationModule } from 'ngx-fluent-design';

const DECLARATIONS = [
    NotificationsPageComponent,
    MessageBarPageComponent
];

@NgModule({
    imports: [
        NgxFluentDesignNotificationModule,
        NgxFluentDesignCardModule,
        SharedComponentsModule,
        RouterModule
    ],
    declarations: [DECLARATIONS]
})
export class NotificationsPageModule {}
