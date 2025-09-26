import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExhibitionsRequest } from '../model/exhibitions-request.model';
import { ExhibitionsResponse } from '../model/exhibitions-response.model';

/**
 * @summary Resource service responsible for retrieving exhibition data from the Art Institute of Chicago API.
 * @author Carlos Perez
 */
@Injectable({
  providedIn: 'root'
})
export class ExhibitionResourceService {
  private readonly http = inject(HttpClient);
  private readonly endpointUrl = 'https://api.artic.edu/api/v1/exhibitions';

  fetchExhibitions(request: ExhibitionsRequest): Observable<ExhibitionsResponse> {
    return this.http.get<ExhibitionsResponse>(this.endpointUrl, {
      params: request.toQueryParams()
    });
  }
}
