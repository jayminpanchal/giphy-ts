export interface GIFObject {
  type: string;
  id: string;
  slug: string;
  url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  update_datetime: string;
  create_datetime: string;
  import_datetime: string;
  trending_datetime: string;
  title: string;
  images: {
    downsized: GIFImage;
    downsized_large: GIFImage;
    downsized_medium: GIFImage;
    downsized_small: GIFImage;
    downsized_still: GIFImage;
    fixed_height: GIFImage;
    fixed_height_downsampled: GIFImage;
    fixed_height_small: GIFImage;
    fixed_height_small_still: GIFImage;
    fixed_height_still: GIFImage;
    fixed_width: GIFImage;
    fixed_width_downsampled: GIFImage;
    fixed_width_small: GIFImage;
    fixed_width_small_still: GIFImage;
    fixed_width_still: GIFImage;
    looping: GIFImage;
    original: GIFImage;
    original_mp4: GIFImage;
    original_still: GIFImage;
    preview: GIFImage;
    preview_gif: GIFImage;
    preview_webp: GIFImage;
  };
}
export interface GIFImage {
  url: string;
  mp4?: string;
  height: string;
  width: string;
}

export interface Pagination {
  offset: number;
  total_count: number;
  count: number;
}

export interface FetchImagesPayload {
  q: string;
  offset: number;
}

export interface SetSearchImagesPayload {
  data: GIFObject[];
  pagination: Pagination;
}

export interface SetSearchImagesErrorPayload {
  message: string;
}

export interface SearchAction {
  type: string;
  payload:
    | SetSearchImagesPayload
    | FetchImagesPayload
    | SetSearchImagesErrorPayload;
}

export interface SearchState {
  images: Array<GIFObject>;
  pagination: Pagination;
  errorMessage: string;
}

export interface StoreState {
  search: SearchState;
}
