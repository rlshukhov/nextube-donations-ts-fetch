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
 * @interface UsersEmailPasswordResetUpdateRequest
 */
export interface UsersEmailPasswordResetUpdateRequest {
    /**
     *
     * @type {string}
     * @memberof UsersEmailPasswordResetUpdateRequest
     */
    token: string;
    /**
     *
     * @type {string}
     * @memberof UsersEmailPasswordResetUpdateRequest
     */
    newPassword: string;
}
/**
 * Check if a given object implements the UsersEmailPasswordResetUpdateRequest interface.
 */
export declare function instanceOfUsersEmailPasswordResetUpdateRequest(value: object): boolean;
export declare function UsersEmailPasswordResetUpdateRequestFromJSON(json: any): UsersEmailPasswordResetUpdateRequest;
export declare function UsersEmailPasswordResetUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersEmailPasswordResetUpdateRequest;
export declare function UsersEmailPasswordResetUpdateRequestToJSON(value?: UsersEmailPasswordResetUpdateRequest | null): any;