import { Injectable } from '@angular/core';
import { dark, light, Theme } from './theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  readonly availableThemes: Theme[] = [light, dark];
  private active: Theme = light;

  getActiveTheme(): Theme {
    return this.active;
  }

  isDarkTheme(): boolean {
    return this.active.name === dark.name;
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property],
      );
    });
  }
}
