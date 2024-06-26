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
 * @interface ChannelsCreate200Response
 */
export interface ChannelsCreate200Response {
    /**
     *
     * @type {string}
     * @memberof ChannelsCreate200Response
     */
    status: string;
    /**
     *
     * @type {PrivateChannel}
     * @memberof ChannelsCreate200Response
     */
    data: PrivateChannel;
}
/**
 * Check if a given object implements the ChannelsCreate200Response interface.
 */
export declare function instanceOfChannelsCreate200Response(value: object): boolean;
export declare function ChannelsCreate200ResponseFromJSON(json: any): ChannelsCreate200Response;
export declare function ChannelsCreate200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelsCreate200Response;
export declare function ChannelsCreate200ResponseToJSON(value?: ChannelsCreate200Response | null): any;
