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
 * @interface UsersRegister200ResponseData
 */
export interface UsersRegister200ResponseData {
    /**
     * 
     * @type {string}
     * @memberof UsersRegister200ResponseData
     */
    token: string;
}

/**
 * Check if a given object implements the UsersRegister200ResponseData interface.
 */
export function instanceOfUsersRegister200ResponseData(value: object): boolean {
    if (!('token' in value)) return false;
    return true;
}

export function UsersRegister200ResponseDataFromJSON(json: any): UsersRegister200ResponseData {
    return UsersRegister200ResponseDataFromJSONTyped(json, false);
}

export function UsersRegister200ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersRegister200ResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'token': json['token'],
    };
}

export function UsersRegister200ResponseDataToJSON(value?: UsersRegister200ResponseData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'token': value['token'],
    };
}

