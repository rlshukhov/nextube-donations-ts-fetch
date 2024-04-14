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
import type { DonationsInit200ResponseData } from './DonationsInit200ResponseData';
import {
    DonationsInit200ResponseDataFromJSON,
    DonationsInit200ResponseDataFromJSONTyped,
    DonationsInit200ResponseDataToJSON,
} from './DonationsInit200ResponseData';

/**
 * 
 * @export
 * @interface DonationsInit200Response
 */
export interface DonationsInit200Response {
    /**
     * 
     * @type {string}
     * @memberof DonationsInit200Response
     */
    status: string;
    /**
     * 
     * @type {DonationsInit200ResponseData}
     * @memberof DonationsInit200Response
     */
    data: DonationsInit200ResponseData;
}

/**
 * Check if a given object implements the DonationsInit200Response interface.
 */
export function instanceOfDonationsInit200Response(value: object): boolean {
    if (!('status' in value)) return false;
    if (!('data' in value)) return false;
    return true;
}

export function DonationsInit200ResponseFromJSON(json: any): DonationsInit200Response {
    return DonationsInit200ResponseFromJSONTyped(json, false);
}

export function DonationsInit200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DonationsInit200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'data': DonationsInit200ResponseDataFromJSON(json['data']),
    };
}

export function DonationsInit200ResponseToJSON(value?: DonationsInit200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'status': value['status'],
        'data': DonationsInit200ResponseDataToJSON(value['data']),
    };
}

