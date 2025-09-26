import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { LanguageToggleComponent } from '../language-toggle/language-toggle.component';
import { TranslateModule } from '@ngx-translate/core';

/**
 * @summary Displays the application toolbar with the Art Institute of Chicago branding and language selector.
 * @author Carlos Perez
 */
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, LanguageToggleComponent, TranslateModule],
  templateUrl: './app-toolbar.component.html',
  styleUrl: './app-toolbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppToolbarComponent {}
