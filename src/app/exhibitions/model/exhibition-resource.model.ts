/**
 * @summary Represents the raw exhibition information returned by the Art Institute of Chicago API.
 * @author Carlos Perez
 */
export interface ExhibitionResource {
  id: number;
  title: string;
  short_description: string | null;
  status: string | null;
  web_url: string;
  image_url: string | null;
  gallery_title: string | null;
  aic_start_at: string | null;
  aic_end_at: string | null;
}
