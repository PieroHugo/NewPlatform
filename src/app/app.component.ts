import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AppToolbarComponent } from './public/components/app-toolbar/app-toolbar.component';
import { ExhibitionsInformationComponent } from './exhibitions/components/exhibitions-information/exhibitions-information.component';
import { AppFooterComponent } from './public/components/app-footer/app-footer.component';
import { TranslateService } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

/**
 * @summary Root component that orchestrates the public layout for the Art Institute of Chicago exhibitions showcase.
 * @author Carlos Perez
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppToolbarComponent, ExhibitionsInformationComponent, AppFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private readonly translateService = inject(TranslateService);

  constructor() {
    const initialLanguage = this.translateService.currentLang ?? this.translateService.defaultLang ?? 'en';
    document.documentElement.lang = initialLanguage;
    this.translateService.onLangChange.pipe(takeUntilDestroyed()).subscribe((event) => {
      document.documentElement.lang = event.lang;
    });
  }
}
