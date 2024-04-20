"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationToJSON = exports.TranslationFromJSONTyped = exports.TranslationFromJSON = exports.instanceOfTranslation = void 0;
/**
 * Check if a given object implements the Translation interface.
 */
function instanceOfTranslation(value) {
    if (!('title' in value))
        return false;
    if (!('description' in value))
        return false;
    return true;
}
exports.instanceOfTranslation = instanceOfTranslation;
function TranslationFromJSON(json) {
    return TranslationFromJSONTyped(json, false);
}
exports.TranslationFromJSON = TranslationFromJSON;
function TranslationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'title': json['title'],
        'description': json['description'],
    };
}
exports.TranslationFromJSONTyped = TranslationFromJSONTyped;
function TranslationToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'title': value['title'],
        'description': value['description'],
    };
}
exports.TranslationToJSON = TranslationToJSON;