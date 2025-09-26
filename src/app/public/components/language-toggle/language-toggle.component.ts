import { ChangeDetectionStrategy, Component, Signal, inject, signal } from '@angular/core';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

/**
 * @summary Provides a toggle button group to switch the interface language between English and Spanish.
 * @author Carlos Perez
 */
@Component({
  selector: 'app-language-toggle',
  standalone: true,
  imports: [CommonModule, MatButtonToggleModule],
  templateUrl: './language-toggle.component.html',
  styleUrl: './language-toggle.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageToggleComponent {
  private readonly translateService = inject(TranslateService);
  private readonly languageSignal = signal<string>(
    this.translateService.currentLang ?? this.translateService.defaultLang ?? 'en'
  );

  readonly currentLang: Signal<string> = this.languageSignal.asReadonly();

  constructor() {
    this.translateService.onLangChange
      .pipe(takeUntilDestroyed())
      .subscribe((event) => this.languageSignal.set(event.lang));
  }

  switchLanguage(change: MatButtonToggleChange): void {
    this.languageSignal.set(change.value);
    this.translateService.use(change.value);
  }
}
