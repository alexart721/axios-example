import { TransporterOptions } from '../../transporter'

export type ClientTransporterOptions = Pick<
  TransporterOptions,
  Exclude<keyof TransporterOptions, 'headers'> & Exclude<keyof TransporterOptions, 'host'>
> & {
  /**
   * The host used by the requester.
   */
  readonly host?: string

  /**
   * The headers used by the requester. The transporter
   * layer may add some extra headers during the request
   * for the user agent, and others.
   */
  readonly headers?: Headers

  readonly requestInterceptor?: any

  readonly responseInterceptor?: {
    fulfilled: any
    rejected: any
  }
}
