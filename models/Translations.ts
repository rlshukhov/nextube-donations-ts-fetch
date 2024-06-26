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
import type { Translation } from './Translation';
import {
    TranslationFromJSON,
    TranslationFromJSONTyped,
    TranslationToJSON,
} from './Translation';

/**
 * 
 * @export
 * @interface Translations
 */
export interface Translations {
    /**
     * 
     * @type {Translation}
     * @memberof Translations
     */
    en?: Translation;
    /**
     * 
     * @type {Translation}
     * @memberof Translations
     */
    ru?: Translation;
}

/**
 * Check if a given object implements the Translations interface.
 */
export function instanceOfTranslations(value: object): boolean {
    return true;
}

export function TranslationsFromJSON(json: any): Translations {
    return TranslationsFromJSONTyped(json, false);
}

export function TranslationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Translations {
    if (json == null) {
        return json;
    }
    return {
        
        'en': json['en'] == null ? undefined : TranslationFromJSON(json['en']),
        'ru': json['ru'] == null ? undefined : TranslationFromJSON(json['ru']),
    };
}

export function TranslationsToJSON(value?: Translations | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'en': TranslationToJSON(value['en']),
        'ru': TranslationToJSON(value['ru']),
    };
}

