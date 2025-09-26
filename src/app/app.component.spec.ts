import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ExhibitionResourceService } from './exhibitions/services/exhibition-resource.service';
import { of } from 'rxjs';

class ExhibitionResourceServiceStub {
  fetchExhibitions() {
    return of({ data: [] });
  }
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ],
      providers: [{ provide: ExhibitionResourceService, useClass: ExhibitionResourceServiceStub }]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
