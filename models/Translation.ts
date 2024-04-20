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
 * @interface Translation
 */
export interface Translation {
    /**
     * 
     * @type {string}
     * @memberof Translation
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Translation
     */
    description: string;
}

/**
 * Check if a given object implements the Translation interface.
 */
export function instanceOfTranslation(value: object): boolean {
    if (!('title' in value)) return false;
    if (!('description' in value)) return false;
    return true;
}

export function TranslationFromJSON(json: any): Translation {
    return TranslationFromJSONTyped(json, false);
}

export function TranslationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Translation {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'],
        'description': json['description'],
    };
}

export function TranslationToJSON(value?: Translation | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'title': value['title'],
        'description': value['description'],
    };
}
