import { EventEmitter } from '@angular/core';

export interface INgxFluentDesignDialog {
    displaySecondaryAction: boolean;
    displayCloseIcon: boolean;
    primaryActionName: string;
    secondaryActionName: string;
    header: string;

    readonly primaryActionClicked: EventEmitter<void>;
    readonly secondaryActionClicked: EventEmitter<void>;
    readonly closeIconClicked: EventEmitter<void>;
}
