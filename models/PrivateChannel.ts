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
import type { PrivateFile } from './PrivateFile';
import {
    PrivateFileFromJSON,
    PrivateFileFromJSONTyped,
    PrivateFileToJSON,
} from './PrivateFile';
import type { Translations } from './Translations';
import {
    TranslationsFromJSON,
    TranslationsFromJSONTyped,
    TranslationsToJSON,
} from './Translations';

/**
 * 
 * @export
 * @interface PrivateChannel
 */
export interface PrivateChannel {
    /**
     * 
     * @type {PrivateFile}
     * @memberof PrivateChannel
     */
    avatarFile: PrivateFile;
    /**
     * 
     * @type {Translations}
     * @memberof PrivateChannel
     */
    translations?: Translations;
    /**
     * 
     * @type {string}
     * @memberof PrivateChannel
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof PrivateChannel
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PrivateChannel
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof PrivateChannel
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof PrivateChannel
     */
    creationDate: string;
    /**
     * 
     * @type {boolean}
     * @memberof PrivateChannel
     */
    showCollectedSum: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PrivateChannel
     */
    isOwned: boolean;
}

/**
 * Check if a given object implements the PrivateChannel interface.
 */
export function instanceOfPrivateChannel(value: object): boolean {
    if (!('avatarFile' in value)) return false;
    if (!('id' in value)) return false;
    if (!('name' in value)) return false;
    if (!('title' in value)) return false;
    if (!('creationDate' in value)) return false;
    if (!('showCollectedSum' in value)) return false;
    if (!('isOwned' in value)) return false;
    return true;
}

export function PrivateChannelFromJSON(json: any): PrivateChannel {
    return PrivateChannelFromJSONTyped(json, false);
}

export function PrivateChannelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrivateChannel {
    if (json == null) {
        return json;
    }
    return {
        
        'avatarFile': PrivateFileFromJSON(json['avatar_file']),
        'translations': json['translations'] == null ? undefined : TranslationsFromJSON(json['translations']),
        'id': json['id'],
        'name': json['name'],
        'title': json['title'],
        'description': json['description'] == null ? undefined : json['description'],
        'creationDate': json['creation_date'],
        'showCollectedSum': json['show_collected_sum'],
        'isOwned': json['is_owned'],
    };
}

export function PrivateChannelToJSON(value?: PrivateChannel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'avatar_file': PrivateFileToJSON(value['avatarFile']),
        'translations': TranslationsToJSON(value['translations']),
        'id': value['id'],
        'name': value['name'],
        'title': value['title'],
        'description': value['description'],
        'creation_date': value['creationDate'],
        'show_collected_sum': value['showCollectedSum'],
        'is_owned': value['isOwned'],
    };
}

