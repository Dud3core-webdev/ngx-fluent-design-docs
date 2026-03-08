import { Routes } from '@angular/router';
import { NotificationsPageComponent } from './notifications-page.component';
import { MessageBarPageComponent } from './pages/message-bar/message-bar-page.component';

export const NOTIFICATIONS_PAGE_ROUTES: Routes = [
    {
        path: '',
        component: NotificationsPageComponent,
        children: [
            {
                path: 'message-bar',
                component: MessageBarPageComponent
            }
        ]
    }
];
