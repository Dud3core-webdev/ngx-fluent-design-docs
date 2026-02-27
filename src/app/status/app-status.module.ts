import { NgModule } from '@angular/core';

import { AppOnlineService } from './services/app-online.service';
import { AppUpdateService } from './services/app-update.service';

@NgModule({
    providers: [
        AppOnlineService,
        AppUpdateService
    ],
    imports: []
})
export class AppStatusModule { }
