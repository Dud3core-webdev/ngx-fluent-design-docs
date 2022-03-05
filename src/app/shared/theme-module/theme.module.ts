import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherService } from './services/theme-switcher.service';

@NgModule({
    imports: [CommonModule],
    providers: [ThemeSwitcherService],
})
export class ThemeModule {}
