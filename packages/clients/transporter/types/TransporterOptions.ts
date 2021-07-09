import { Headers } from '..'

export type TransporterOptions = {
  /**
   * The host used by the requester
   */
  readonly host: string

  /**
   * The headers used by the requester. The transporter
   * layer may add some extra headers during the request
   * for the user agent, and others.
   */
  readonly headers: Headers
}
