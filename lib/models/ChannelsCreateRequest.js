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
exports.ChannelsCreateRequestToJSON = exports.ChannelsCreateRequestFromJSONTyped = exports.ChannelsCreateRequestFromJSON = exports.instanceOfChannelsCreateRequest = void 0;
const UsersProfileUpdateRequestAvatar_1 = require("./UsersProfileUpdateRequestAvatar");
/**
 * Check if a given object implements the ChannelsCreateRequest interface.
 */
function instanceOfChannelsCreateRequest(value) {
    if (!('name' in value))
        return false;
    if (!('title' in value))
        return false;
    if (!('avatarFile' in value))
        return false;
    return true;
}
exports.instanceOfChannelsCreateRequest = instanceOfChannelsCreateRequest;
function ChannelsCreateRequestFromJSON(json) {
    return ChannelsCreateRequestFromJSONTyped(json, false);
}
exports.ChannelsCreateRequestFromJSON = ChannelsCreateRequestFromJSON;
function ChannelsCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'],
        'title': json['title'],
        'description': json['description'] == null ? undefined : json['description'],
        'avatarFile': (0, UsersProfileUpdateRequestAvatar_1.UsersProfileUpdateRequestAvatarFromJSON)(json['avatar_file']),
        'showCollectedSum': json['show_collected_sum'] == null ? undefined : json['show_collected_sum'],
    };
}
exports.ChannelsCreateRequestFromJSONTyped = ChannelsCreateRequestFromJSONTyped;
function ChannelsCreateRequestToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'title': value['title'],
        'description': value['description'],
        'avatar_file': (0, UsersProfileUpdateRequestAvatar_1.UsersProfileUpdateRequestAvatarToJSON)(value['avatarFile']),
        'show_collected_sum': value['showCollectedSum'],
    };
}
exports.ChannelsCreateRequestToJSON = ChannelsCreateRequestToJSON;