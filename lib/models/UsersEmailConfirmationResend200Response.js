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
exports.UsersEmailConfirmationResend200ResponseToJSON = exports.UsersEmailConfirmationResend200ResponseFromJSONTyped = exports.UsersEmailConfirmationResend200ResponseFromJSON = exports.instanceOfUsersEmailConfirmationResend200Response = void 0;
/**
 * Check if a given object implements the UsersEmailConfirmationResend200Response interface.
 */
function instanceOfUsersEmailConfirmationResend200Response(value) {
    if (!('status' in value))
        return false;
    return true;
}
exports.instanceOfUsersEmailConfirmationResend200Response = instanceOfUsersEmailConfirmationResend200Response;
function UsersEmailConfirmationResend200ResponseFromJSON(json) {
    return UsersEmailConfirmationResend200ResponseFromJSONTyped(json, false);
}
exports.UsersEmailConfirmationResend200ResponseFromJSON = UsersEmailConfirmationResend200ResponseFromJSON;
function UsersEmailConfirmationResend200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'status': json['status'],
    };
}
exports.UsersEmailConfirmationResend200ResponseFromJSONTyped = UsersEmailConfirmationResend200ResponseFromJSONTyped;
function UsersEmailConfirmationResend200ResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'status': value['status'],
    };
}
exports.UsersEmailConfirmationResend200ResponseToJSON = UsersEmailConfirmationResend200ResponseToJSON;
