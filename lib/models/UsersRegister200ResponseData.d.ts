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
 * @interface UsersRegister200ResponseData
 */
export interface UsersRegister200ResponseData {
    /**
     *
     * @type {string}
     * @memberof UsersRegister200ResponseData
     */
    token: string;
}
/**
 * Check if a given object implements the UsersRegister200ResponseData interface.
 */
export declare function instanceOfUsersRegister200ResponseData(value: object): boolean;
export declare function UsersRegister200ResponseDataFromJSON(json: any): UsersRegister200ResponseData;
export declare function UsersRegister200ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersRegister200ResponseData;
export declare function UsersRegister200ResponseDataToJSON(value?: UsersRegister200ResponseData | null): any;
