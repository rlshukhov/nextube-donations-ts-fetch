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
import type { PublicFile } from './PublicFile';
import {
    PublicFileFromJSON,
    PublicFileFromJSONTyped,
    PublicFileToJSON,
} from './PublicFile';

/**
 * 
 * @export
 * @interface PublicChannel
 */
export interface PublicChannel {
    /**
     * 
     * @type {PublicFile}
     * @memberof PublicChannel
     */
    avatarFile: PublicFile;
    /**
     * 
     * @type {string}
     * @memberof PublicChannel
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof PublicChannel
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PublicChannel
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof PublicChannel
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof PublicChannel
     */
    creationDate: string;
}

/**
 * Check if a given object implements the PublicChannel interface.
 */
export function instanceOfPublicChannel(value: object): boolean {
    if (!('avatarFile' in value)) return false;
    if (!('id' in value)) return false;
    if (!('name' in value)) return false;
    if (!('title' in value)) return false;
    if (!('creationDate' in value)) return false;
    return true;
}

export function PublicChannelFromJSON(json: any): PublicChannel {
    return PublicChannelFromJSONTyped(json, false);
}

export function PublicChannelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicChannel {
    if (json == null) {
        return json;
    }
    return {
        
        'avatarFile': PublicFileFromJSON(json['avatar_file']),
        'id': json['id'],
        'name': json['name'],
        'title': json['title'],
        'description': json['description'] == null ? undefined : json['description'],
        'creationDate': json['creation_date'],
    };
}

export function PublicChannelToJSON(value?: PublicChannel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'avatar_file': PublicFileToJSON(value['avatarFile']),
        'id': value['id'],
        'name': value['name'],
        'title': value['title'],
        'description': value['description'],
        'creation_date': value['creationDate'],
    };
}

