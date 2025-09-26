/**
 * @summary Domain entity describing an exhibition ready for presentation in the UI.
 * @author Carlos Perez
 */
export interface Exhibition {
  id: number;
  title: string;
  shortDescription: string;
  status: string;
  webUrl: string;
  imageUrl: string | null;
  galleryTitle: string;
  startDate: Date | null;
  endDate: Date | null;
}
