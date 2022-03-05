import { NgModule } from '@angular/core';
import { ConnectionServiceModule } from 'ng-connection-service';
import { AppOnlineService } from './services/app-online.service';
import { AppUpdateService } from './services/app-update.service';

@NgModule({
    providers: [
        AppOnlineService,
        AppUpdateService
    ],
    imports: [ConnectionServiceModule]
})
export class AppStatusModule {}
