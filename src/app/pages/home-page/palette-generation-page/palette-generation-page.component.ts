import { Component, ElementRef, ViewChild, ViewRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { hexCodeValidator } from './validators/hex-code.validator';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
    templateUrl: './palette-generation-page.component.html',
    styleUrls: ['./palette-generation-page.component.scss']
})
export class PaletteGenerationPageComponent {

    @ViewChild('download')
    private readonly _downloadAnchor: ElementRef;

    public readonly paletteForm: FormGroup;
    public generatingStyles: boolean = false;

    private static convertFormKeyToScssVariables(formKey: string): string {
        return ['--ngx-fluent-design'].concat(formKey.split(/(?=[A-Z])/))
            .join('-')
            .toLowerCase();
    }

    private static convertHexValueToRgb(value: string): string {
        const rgbValue = value.match(/.{1,2}/g);

        return rgbValue ? [
            parseInt(rgbValue[1], 16),
            parseInt(rgbValue[2], 16),
            parseInt(rgbValue[3], 16)
        ].join(',') : '';
    }

    private static createFileFromString(cssVars: string): File {
        const fullBlob: string = `:root {\n${cssVars}\n}`;
        return new File([fullBlob], 'styles.scss', {
            type: 'SCSS Style Sheet'
        });
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

    constructor(elementRef: ElementRef) {
        this._downloadAnchor = elementRef;
        this.paletteForm = PaletteGenerationPageComponent.createFormGroup();
    }

    public generateStyles(): void {
        const formValue = this.paletteForm.value;
        this.generatingStyles = true;

        of(true).pipe(
            map((): Array<string> => {
                let convertedToLibScssVars: Array<string> = [];
                for (const key in formValue) {
                    const scssVarValue = PaletteGenerationPageComponent.convertHexValueToRgb(formValue[key]);
                    const scssVarNameArray = PaletteGenerationPageComponent.convertFormKeyToScssVariables(key);
                    convertedToLibScssVars = convertedToLibScssVars.concat(`${scssVarNameArray}: rgb(${scssVarValue})`);
                }

                return convertedToLibScssVars;
            })
        ).subscribe({
            next: (scssVars: Array<string>): void => {
                const file = PaletteGenerationPageComponent.createFileFromString(scssVars.join(';\n'));
                this.downloadFile(file);
            },
            complete: () => this.generatingStyles = false
        });
    }

    private downloadFile(file: File): void {
        const fileUrl = URL.createObjectURL(file);
        this.setDownloadAnchorProperties(fileUrl);
        this._downloadAnchor.nativeElement.click();
    }

    private setDownloadAnchorProperties(fileUrl: string): void {
        this._downloadAnchor.nativeElement.target = '_blank';
        this._downloadAnchor.nativeElement.href = fileUrl;
        this._downloadAnchor.nativeElement.download = 'styles.scss';
    }
}
