export interface Envelope<T> {
  success: boolean;
  error: any;
  data?: T;
}
