import { Injectable } from '@angular/core';
import { ExhibitionResource } from '../model/exhibition-resource.model';
import { Exhibition } from '../model/exhibition.model';

/**
 * @summary Transforms exhibition resources obtained from the API into presentation-friendly domain entities.
 * @author Carlos Perez
 */
@Injectable({
  providedIn: 'root'
})
export class ExhibitionAssemblerService {
  toDomain(resource: ExhibitionResource): Exhibition {
    return {
      id: resource.id,
      title: resource.title,
      shortDescription: resource.short_description ?? '',
      status: resource.status ?? '',
      webUrl: resource.web_url,
      imageUrl: resource.image_url,
      galleryTitle: resource.gallery_title ?? '',
      startDate: resource.aic_start_at ? new Date(resource.aic_start_at) : null,
      endDate: resource.aic_end_at ? new Date(resource.aic_end_at) : null
    };
  }
}
