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
 * @interface ChannelsCreateRequestAvatarFile
 */
export interface ChannelsCreateRequestAvatarFile {
    /**
     * 
     * @type {string}
     * @memberof ChannelsCreateRequestAvatarFile
     */
    id: string;
}

/**
 * Check if a given object implements the ChannelsCreateRequestAvatarFile interface.
 */
export function instanceOfChannelsCreateRequestAvatarFile(value: object): boolean {
    if (!('id' in value)) return false;
    return true;
}

export function ChannelsCreateRequestAvatarFileFromJSON(json: any): ChannelsCreateRequestAvatarFile {
    return ChannelsCreateRequestAvatarFileFromJSONTyped(json, false);
}

export function ChannelsCreateRequestAvatarFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelsCreateRequestAvatarFile {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
    };
}

export function ChannelsCreateRequestAvatarFileToJSON(value?: ChannelsCreateRequestAvatarFile | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
    };
}

