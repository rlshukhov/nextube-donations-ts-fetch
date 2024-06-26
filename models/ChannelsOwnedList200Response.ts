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
import type { PrivateChannel } from './PrivateChannel';
import {
    PrivateChannelFromJSON,
    PrivateChannelFromJSONTyped,
    PrivateChannelToJSON,
} from './PrivateChannel';

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
export function instanceOfChannelsOwnedList200Response(value: object): boolean {
    if (!('status' in value)) return false;
    if (!('data' in value)) return false;
    if (!('count' in value)) return false;
    if (!('total' in value)) return false;
    return true;
}

export function ChannelsOwnedList200ResponseFromJSON(json: any): ChannelsOwnedList200Response {
    return ChannelsOwnedList200ResponseFromJSONTyped(json, false);
}

export function ChannelsOwnedList200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelsOwnedList200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'data': ((json['data'] as Array<any>).map(PrivateChannelFromJSON)),
        'count': json['count'],
        'total': json['total'],
    };
}

export function ChannelsOwnedList200ResponseToJSON(value?: ChannelsOwnedList200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'status': value['status'],
        'data': ((value['data'] as Array<any>).map(PrivateChannelToJSON)),
        'count': value['count'],
        'total': value['total'],
    };
}

