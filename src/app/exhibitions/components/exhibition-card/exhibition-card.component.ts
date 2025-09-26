import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Exhibition } from '../../model/exhibition.model';
import { TranslateModule } from '@ngx-translate/core';

/**
 * @summary Renders a single exhibition card using Angular Material design components.
 * @author Carlos Perez
 */
@Component({
  selector: 'app-exhibition-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, DatePipe, TranslateModule],
  templateUrl: './exhibition-card.component.html',
  styleUrl: './exhibition-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExhibitionCardComponent {
  @Input({ required: true }) exhibition!: Exhibition;

  get hasDateRange(): boolean {
    return !!(this.exhibition.startDate || this.exhibition.endDate);
  }
}
