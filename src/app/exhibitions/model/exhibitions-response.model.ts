import { ExhibitionResource } from './exhibition-resource.model';

/**
 * @summary Describes the response envelope returned by the exhibitions endpoint.
 * @author Carlos Perez
 */
export interface ExhibitionsResponse {
  data: ExhibitionResource[];
}
