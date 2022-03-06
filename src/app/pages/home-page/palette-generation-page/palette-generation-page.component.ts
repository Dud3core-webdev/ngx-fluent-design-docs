import { Component, ElementRef, ViewChild, ViewRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { hexCodeValidator } from './validators/hex-code.validator';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HexToRgbService } from '../../../theme/services/hex-to-rgb.service';
import { defaultPalette } from './constants/generated-default-theme.class';

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
            /** Theme Primary */
            themePrimary: new FormControl(null, [Validators.required, hexCodeValidator()]),
            themeSecondary: new FormControl(null, [Validators.required, hexCodeValidator()]),
            themeTertiary: new FormControl(null, [Validators.required, hexCodeValidator()]),
            themeLight: new FormControl(null, [Validators.required, hexCodeValidator()]),
            themeLighter: new FormControl(null, [Validators.required, hexCodeValidator()]),
            themeLighterAlt: new FormControl(null, [Validators.required, hexCodeValidator()]),
            themeDark: new FormControl(null, [Validators.required, hexCodeValidator()]),
            themeDarker: new FormControl(null, [Validators.required, hexCodeValidator()]),
            themeDarkAlt: new FormControl(null, [Validators.required, hexCodeValidator()]),

            /** Foreground */
            foregroundBlack: new FormControl(null, [Validators.required, hexCodeValidator()]),
            foregroundNeutralDark: new FormControl(null, [Validators.required, hexCodeValidator()]),
            foregroundNeutralPrimary: new FormControl(null, [Validators.required, hexCodeValidator()]),
            foregroundNeutralPrimaryAlt: new FormControl(null, [Validators.required, hexCodeValidator()]),
            foregroundNeutralSecondary: new FormControl(null, [Validators.required, hexCodeValidator()]),
            foregroundNeutralTertiary: new FormControl(null, [Validators.required, hexCodeValidator()]),
            foregroundWhite: new FormControl(null, [Validators.required, hexCodeValidator()]),

            /** Background */
            backgroundNeutralTertiaryAlt: new FormControl(null, [Validators.required, hexCodeValidator()]),
            backgroundNeutralDark: new FormControl(null, [Validators.required, hexCodeValidator()]),
            backgroundNeutralQuaternaryAlt: new FormControl(null, [Validators.required, hexCodeValidator()]),
            backgroundNeutralLight: new FormControl(null, [Validators.required, hexCodeValidator()]),
            backgroundNeutralLighter: new FormControl(null, [Validators.required, hexCodeValidator()]),
            backgroundNeutralLightAlt: new FormControl(null, [Validators.required, hexCodeValidator()])
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
                    convertedToLibScssVars = convertedToLibScssVars.concat(`${scssVarNameArray}: ${scssVarValue};`);
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

    public generateExampleStyleSheet(): void {
        this.paletteForm.setValue(defaultPalette);
    }

    public downloadFile(config: IThemeFileDownloadConfig): void {
        const stylesSheet: File = PaletteGenerationPageComponent.createFileFromString(config);
        const fileUrl: string = URL.createObjectURL(stylesSheet);

        this.setPropertiesToAnchorElement(fileUrl, config.styleSheetName);
        this.triggerElementActions();
    }

    private setPropertiesToAnchorElement(fileUrl: string, fileName: string): void {
        this._elementReference.nativeElement.target = '_blank';
        this._elementReference.nativeElement.href = fileUrl;
        this._elementReference.nativeElement.download = fileName;
    }

    private triggerElementActions(): void {
        this._elementReference.nativeElement.click();
        this._elementReference.nativeElement.remove();
    }
}
