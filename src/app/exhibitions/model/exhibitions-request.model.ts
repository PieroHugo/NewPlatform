/**
 * @summary Encapsulates the query parameters required to retrieve exhibitions from the Art Institute of Chicago API.
 * @author Carlos Perez
 */
export class ExhibitionsRequest {
  constructor(
    readonly fields: string = 'id,title,short_description,status,web_url,image_url,gallery_title,aic_start_at,aic_end_at',
    readonly limit: number = 25
  ) {}

  toQueryParams(): Record<string, string> {
    return {
      fields: this.fields,
      limit: String(this.limit)
    };
  }
}
