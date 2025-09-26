import { ChangeDetectionStrategy, Component, OnInit, Signal, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ExhibitionResourceService } from '../../services/exhibition-resource.service';
import { ExhibitionAssemblerService } from '../../services/exhibition-assembler.service';
import { ExhibitionsRequest } from '../../model/exhibitions-request.model';
import { Exhibition } from '../../model/exhibition.model';
import { take } from 'rxjs';
import { ExhibitionCardComponent } from '../exhibition-card/exhibition-card.component';

/**
 * @summary Container component that retrieves and displays the collection of exhibitions.
 * @author Carlos Perez
 */
@Component({
  selector: 'exhibitions-information',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatProgressSpinnerModule, ExhibitionCardComponent],
  templateUrl: './exhibitions-information.component.html',
  styleUrl: './exhibitions-information.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExhibitionsInformationComponent implements OnInit {
  private readonly exhibitionResourceService = inject(ExhibitionResourceService);
  private readonly exhibitionAssembler = inject(ExhibitionAssemblerService);

  private readonly exhibitionsSignal = signal<Exhibition[]>([]);
  private readonly loadingSignal = signal<boolean>(true);
  private readonly errorSignal = signal<string | null>(null);

  readonly exhibitions: Signal<Exhibition[]> = this.exhibitionsSignal.asReadonly();
  readonly isLoading: Signal<boolean> = this.loadingSignal.asReadonly();
  readonly errorMessage: Signal<string | null> = this.errorSignal.asReadonly();
  readonly hasExhibitions = computed(() => this.exhibitions().length > 0);

  ngOnInit(): void {
    this.loadExhibitions();
  }

  private loadExhibitions(): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.exhibitionResourceService
      .fetchExhibitions(new ExhibitionsRequest())
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          const exhibitions = response.data.map((resource) => this.exhibitionAssembler.toDomain(resource));
          this.exhibitionsSignal.set(exhibitions);
          this.loadingSignal.set(false);
        },
        error: () => {
          this.exhibitionsSignal.set([]);
          this.errorSignal.set('exhibitions.errorMessage');
          this.loadingSignal.set(false);
        }
      });
  }
}
