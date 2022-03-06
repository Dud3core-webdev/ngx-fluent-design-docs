import { Injectable } from '@angular/core';

@Injectable()
export class HexToRgbService {

    private static removeHashFromHexValue(hexValue: string): string {
        if (hexValue[0] === '#') {
            return hexValue.substring(1);
        }

        return hexValue;
    }

    public convertValueToRgbCssVar(hexValue: string): string {
        const parsedHexValue = HexToRgbService.removeHashFromHexValue(hexValue);

        if (parsedHexValue.length !== 6) {
            throw new Error('Invalid hex code');
        }

        const aRgbHex = parsedHexValue.match(/.{1,2}/g);

        if (!aRgbHex) {
            throw new Error('Whoops');
        }

        return [
            parseInt(aRgbHex[0], 16),
            parseInt(aRgbHex[1], 16),
            parseInt(aRgbHex[2], 16)
        ].join();
    }
}
