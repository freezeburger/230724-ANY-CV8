import { Observable } from "rxjs";

/**
 * Observable DataSource
 */
export interface DataSource<DataType>{
  /**
   * Exposes an Observable DataSource
   */
  data$:Observable<DataType>
}
