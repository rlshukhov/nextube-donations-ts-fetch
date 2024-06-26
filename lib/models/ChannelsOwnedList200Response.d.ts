/**
 * Nextube Donations
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { PrivateChannel } from './PrivateChannel';
/**
 *
 * @export
 * @interface ChannelsOwnedList200Response
 */
export interface ChannelsOwnedList200Response {
    /**
     *
     * @type {string}
     * @memberof ChannelsOwnedList200Response
     */
    status: string;
    /**
     *
     * @type {Array<PrivateChannel>}
     * @memberof ChannelsOwnedList200Response
     */
    data: Array<PrivateChannel>;
    /**
     *
     * @type {number}
     * @memberof ChannelsOwnedList200Response
     */
    count: number;
    /**
     *
     * @type {number}
     * @memberof ChannelsOwnedList200Response
     */
    total: number;
}
/**
 * Check if a given object implements the ChannelsOwnedList200Response interface.
 */
export declare function instanceOfChannelsOwnedList200Response(value: object): boolean;
export declare function ChannelsOwnedList200ResponseFromJSON(json: any): ChannelsOwnedList200Response;
export declare function ChannelsOwnedList200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelsOwnedList200Response;
export declare function ChannelsOwnedList200ResponseToJSON(value?: ChannelsOwnedList200Response | null): any;
