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
import type { PublicFile } from './PublicFile';
/**
 *
 * @export
 * @interface User
 */
export interface User {
    /**
     *
     * @type {string}
     * @memberof User
     */
    email: string;
    /**
     *
     * @type {boolean}
     * @memberof User
     */
    isEmailConfirmed: boolean;
    /**
     *
     * @type {string}
     * @memberof User
     */
    registrationDate: string;
    /**
     *
     * @type {boolean}
     * @memberof User
     */
    isModerationApproved: boolean;
    /**
     *
     * @type {string}
     * @memberof User
     */
    id: string;
    /**
     *
     * @type {PublicFile}
     * @memberof User
     */
    avatar?: PublicFile;
}
/**
 * Check if a given object implements the User interface.
 */
export declare function instanceOfUser(value: object): boolean;
export declare function UserFromJSON(json: any): User;
export declare function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User;
export declare function UserToJSON(value?: User | null): any;
