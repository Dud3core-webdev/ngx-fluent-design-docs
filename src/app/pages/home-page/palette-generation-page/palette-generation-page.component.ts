import { Component, ElementRef, ViewChild, ViewRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { hexCodeValidator } from './validators/hex-code.validator';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HexToRgbService } from '../../../theme/services/hex-to-rgb.service';

interface IThemeFileDownloadConfig {
    readonly cssVariables: string;
    readonly styleSheetName: string;
    readonly fileTypeDescription: string;
}

@Component({
    templateUrl: './palette-generation-page.component.html',
    styleUrls: ['./palette-generation-page.component.scss']
})
export class PaletteGenerationPageComponent {
    @ViewChild('download')
    private readonly _elementReference: ElementRef;
    private readonly _hexToRgbService: HexToRgbService;

    public readonly paletteForm: FormGroup;
    public generatingStyles: boolean = false;

    private static createFileFromString(config: IThemeFileDownloadConfig): File {
        const mappedBlob: string = `:root {\n${config.cssVariables}\n}`;
        return new File([mappedBlob], config.styleSheetName, {
            type: config.fileTypeDescription
        });
    }

    private static convertFormKeyToScssVariables(formKey: string): string {
        return ['--ngx-fluent-design'].concat(formKey.split(/(?=[A-Z])/))
            .join('-')
            .toLowerCase();
    }

    private static createFormGroup(): FormGroup {
        return new FormGroup({
            themeDarker: new FormControl('#004578', [Validators.required, hexCodeValidator()]),
            themeDark: new FormControl('#005a9e', [Validators.required, hexCodeValidator()]),
            themeDarkAlt: new FormControl('#106ebe', [Validators.required, hexCodeValidator()]),
            themePrimary: new FormControl('#0078d4', [Validators.required, hexCodeValidator()]),
            themeSecondary: new FormControl('#2b88d8', [Validators.required, hexCodeValidator()]),
            themeTertiary: new FormControl('#71afe5', [Validators.required, hexCodeValidator()]),
            themeLight: new FormControl('#c7e0f4', [Validators.required, hexCodeValidator()]),
            themeLighter: new FormControl('#deecf9', [Validators.required, hexCodeValidator()]),
            themeLighterAlt: new FormControl('#eff6fc', [Validators.required, hexCodeValidator()]),
            black: new FormControl('#000000', [Validators.required, hexCodeValidator()]),
            neutralDark: new FormControl('#201f1e', [Validators.required, hexCodeValidator()]),
            neutralPrimary: new FormControl('#323130', [Validators.required, hexCodeValidator()]),
            neutralPrimaryAlt: new FormControl('#3b3a39', [Validators.required, hexCodeValidator()]),
            neutralSecondary: new FormControl('#605e5c', [Validators.required, hexCodeValidator()]),
            neutralTertiary: new FormControl('#a19f9d', [Validators.required, hexCodeValidator()]),
            neutralTertiaryAlt: new FormControl('#c8c6c4', [Validators.required, hexCodeValidator()]),
            neutralQuaternaryAlt: new FormControl('#e1dfdd', [Validators.required, hexCodeValidator()]),
            neutralLight: new FormControl('#edebe9', [Validators.required, hexCodeValidator()]),
            neutralLighter: new FormControl('#f3f2f1', [Validators.required, hexCodeValidator()]),
            neutralLighterAlt: new FormControl('#faf9f8', [Validators.required, hexCodeValidator()]),
        });
    }

    constructor(hexToRgbService: HexToRgbService,
                elementReference: ElementRef) {
        this._hexToRgbService = hexToRgbService;
        this._elementReference = elementReference;

        this.paletteForm = PaletteGenerationPageComponent.createFormGroup();
    }

    public generateStyles(): void {
        const formValue = this.paletteForm.value;
        this.generatingStyles = true;

        of(true).pipe(
            map((): Array<string> => {
                let convertedToLibScssVars: Array<string> = [];
                for (const key in formValue) {
                    const scssVarValue = this._hexToRgbService.convertValueToRgbCssVar(formValue[key]);
                    const scssVarNameArray = PaletteGenerationPageComponent.convertFormKeyToScssVariables(key);
                    convertedToLibScssVars = convertedToLibScssVars.concat(`${scssVarNameArray}: rgb(${scssVarValue});`);
                }

                return convertedToLibScssVars;
            }),
            tap((scssVars: Array<string>) => {
                this.downloadFile({
                    cssVariables: scssVars.join('\n'),
                    styleSheetName: 'styles.scss',
                    fileTypeDescription: 'SCSS Style Sheet'
                });
            })
        ).subscribe({
            complete: () => this.generatingStyles = false
        });
    }

    public downloadFile(config: IThemeFileDownloadConfig): void {
        const stylesSheet: File = PaletteGenerationPageComponent.createFileFromString(config);
        const fileUrl: string = URL.createObjectURL(stylesSheet);

        this.setPropertiesToAnchorElement(fileUrl);
        this.triggerElementActions();
    }

    private setPropertiesToAnchorElement(fileUrl: string): void {
        this._elementReference.nativeElement.target = '_blank';
        this._elementReference.nativeElement.href = fileUrl;
        this._elementReference.nativeElement.download = 'styles.scss';
    }

    private triggerElementActions(): void {
        this._elementReference.nativeElement.click();
        this._elementReference.nativeElement.remove();
    }
}
