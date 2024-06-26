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
/**
 * 
 * @export
 * @interface DonationsInitRequest
 */
export interface DonationsInitRequest {
    /**
     * 
     * @type {string}
     * @memberof DonationsInitRequest
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof DonationsInitRequest
     */
    channelId: string;
    /**
     * 
     * @type {number}
     * @memberof DonationsInitRequest
     */
    sum: number;
    /**
     * 
     * @type {string}
     * @memberof DonationsInitRequest
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof DonationsInitRequest
     */
    paymentType: DonationsInitRequestPaymentTypeEnum;
}


/**
 * @export
 */
export const DonationsInitRequestPaymentTypeEnum = {
    RussiaCard: 'russia-card'
} as const;
export type DonationsInitRequestPaymentTypeEnum = typeof DonationsInitRequestPaymentTypeEnum[keyof typeof DonationsInitRequestPaymentTypeEnum];


/**
 * Check if a given object implements the DonationsInitRequest interface.
 */
export function instanceOfDonationsInitRequest(value: object): boolean {
    if (!('channelId' in value)) return false;
    if (!('sum' in value)) return false;
    if (!('paymentType' in value)) return false;
    return true;
}

export function DonationsInitRequestFromJSON(json: any): DonationsInitRequest {
    return DonationsInitRequestFromJSONTyped(json, false);
}

export function DonationsInitRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DonationsInitRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'] == null ? undefined : json['email'],
        'channelId': json['channel_id'],
        'sum': json['sum'],
        'message': json['message'] == null ? undefined : json['message'],
        'paymentType': json['payment_type'],
    };
}

export function DonationsInitRequestToJSON(value?: DonationsInitRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'email': value['email'],
        'channel_id': value['channelId'],
        'sum': value['sum'],
        'message': value['message'],
        'payment_type': value['paymentType'],
    };
}

