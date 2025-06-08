export interface Trailer {
  key: string;
  name: string;
  site: string;
  type: string;
}

export interface TrailersProps {
  data: Trailer[];
}
