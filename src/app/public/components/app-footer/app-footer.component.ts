import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

/**
 * @summary Presents the global footer with copyright and author information.
 * @author Carlos Perez
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './app-footer.component.html',
  styleUrl: './app-footer.component.css',
  styleUrl: './app-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppFooterComponent {}
