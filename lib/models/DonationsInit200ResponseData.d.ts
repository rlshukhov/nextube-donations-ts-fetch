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
 * @interface DonationsInit200ResponseData
 */
export interface DonationsInit200ResponseData {
    /**
     *
     * @type {string}
     * @memberof DonationsInit200ResponseData
     */
    type: string;
    /**
     *
     * @type {string}
     * @memberof DonationsInit200ResponseData
     */
    data: string;
}
/**
 * Check if a given object implements the DonationsInit200ResponseData interface.
 */
export declare function instanceOfDonationsInit200ResponseData(value: object): boolean;
export declare function DonationsInit200ResponseDataFromJSON(json: any): DonationsInit200ResponseData;
export declare function DonationsInit200ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DonationsInit200ResponseData;
export declare function DonationsInit200ResponseDataToJSON(value?: DonationsInit200ResponseData | null): any;