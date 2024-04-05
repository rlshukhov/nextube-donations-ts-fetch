/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
import type { PublicChannel } from './PublicChannel';
import {
    PublicChannelFromJSON,
    PublicChannelFromJSONTyped,
    PublicChannelToJSON,
} from './PublicChannel';

/**
 * 
 * @export
 * @interface ChannelsPublicIdGet200Response
 */
export interface ChannelsPublicIdGet200Response {
    /**
     * 
     * @type {string}
     * @memberof ChannelsPublicIdGet200Response
     */
    status: string;
    /**
     * 
     * @type {PublicChannel}
     * @memberof ChannelsPublicIdGet200Response
     */
    data: PublicChannel;
}

/**
 * Check if a given object implements the ChannelsPublicIdGet200Response interface.
 */
export function instanceOfChannelsPublicIdGet200Response(value: object): boolean {
    if (!('status' in value)) return false;
    if (!('data' in value)) return false;
    return true;
}

export function ChannelsPublicIdGet200ResponseFromJSON(json: any): ChannelsPublicIdGet200Response {
    return ChannelsPublicIdGet200ResponseFromJSONTyped(json, false);
}

export function ChannelsPublicIdGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelsPublicIdGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'data': PublicChannelFromJSON(json['data']),
    };
}

export function ChannelsPublicIdGet200ResponseToJSON(value?: ChannelsPublicIdGet200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'status': value['status'],
        'data': PublicChannelToJSON(value['data']),
    };
}
