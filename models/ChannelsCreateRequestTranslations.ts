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
import type { ChannelsCreateRequestTranslationsEn } from './ChannelsCreateRequestTranslationsEn';
import {
    ChannelsCreateRequestTranslationsEnFromJSON,
    ChannelsCreateRequestTranslationsEnFromJSONTyped,
    ChannelsCreateRequestTranslationsEnToJSON,
} from './ChannelsCreateRequestTranslationsEn';

/**
 * 
 * @export
 * @interface ChannelsCreateRequestTranslations
 */
export interface ChannelsCreateRequestTranslations {
    /**
     * 
     * @type {ChannelsCreateRequestTranslationsEn}
     * @memberof ChannelsCreateRequestTranslations
     */
    en?: ChannelsCreateRequestTranslationsEn;
    /**
     * 
     * @type {ChannelsCreateRequestTranslationsEn}
     * @memberof ChannelsCreateRequestTranslations
     */
    ru?: ChannelsCreateRequestTranslationsEn;
}

/**
 * Check if a given object implements the ChannelsCreateRequestTranslations interface.
 */
export function instanceOfChannelsCreateRequestTranslations(value: object): boolean {
    return true;
}

export function ChannelsCreateRequestTranslationsFromJSON(json: any): ChannelsCreateRequestTranslations {
    return ChannelsCreateRequestTranslationsFromJSONTyped(json, false);
}

export function ChannelsCreateRequestTranslationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelsCreateRequestTranslations {
    if (json == null) {
        return json;
    }
    return {
        
        'en': json['en'] == null ? undefined : ChannelsCreateRequestTranslationsEnFromJSON(json['en']),
        'ru': json['ru'] == null ? undefined : ChannelsCreateRequestTranslationsEnFromJSON(json['ru']),
    };
}

export function ChannelsCreateRequestTranslationsToJSON(value?: ChannelsCreateRequestTranslations | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'en': ChannelsCreateRequestTranslationsEnToJSON(value['en']),
        'ru': ChannelsCreateRequestTranslationsEnToJSON(value['ru']),
    };
}

