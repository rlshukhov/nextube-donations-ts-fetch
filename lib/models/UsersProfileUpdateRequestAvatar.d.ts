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
/**
 *
 * @export
 * @interface UsersProfileUpdateRequestAvatar
 */
export interface UsersProfileUpdateRequestAvatar {
    /**
     *
     * @type {string}
     * @memberof UsersProfileUpdateRequestAvatar
     */
    id: string;
}
/**
 * Check if a given object implements the UsersProfileUpdateRequestAvatar interface.
 */
export declare function instanceOfUsersProfileUpdateRequestAvatar(value: object): boolean;
export declare function UsersProfileUpdateRequestAvatarFromJSON(json: any): UsersProfileUpdateRequestAvatar;
export declare function UsersProfileUpdateRequestAvatarFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersProfileUpdateRequestAvatar;
export declare function UsersProfileUpdateRequestAvatarToJSON(value?: UsersProfileUpdateRequestAvatar | null): any;
