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
 * @interface DonationsInitRequest
 */
export interface DonationsInitRequest {
    /**
     *
     * @type {string}
     * @memberof DonationsInitRequest
     */
    email?: string;
    /**
     *
     * @type {string}
     * @memberof DonationsInitRequest
     */
    channelId: string;
    /**
     *
     * @type {number}
     * @memberof DonationsInitRequest
     */
    sum: number;
    /**
     *
     * @type {string}
     * @memberof DonationsInitRequest
     */
    message?: string;
    /**
     *
     * @type {string}
     * @memberof DonationsInitRequest
     */
    paymentType: DonationsInitRequestPaymentTypeEnum;
}
/**
 * @export
 */
export declare const DonationsInitRequestPaymentTypeEnum: {
    readonly RussiaCard: "russia-card";
};
export type DonationsInitRequestPaymentTypeEnum = typeof DonationsInitRequestPaymentTypeEnum[keyof typeof DonationsInitRequestPaymentTypeEnum];
/**
 * Check if a given object implements the DonationsInitRequest interface.
 */
export declare function instanceOfDonationsInitRequest(value: object): boolean;
export declare function DonationsInitRequestFromJSON(json: any): DonationsInitRequest;
export declare function DonationsInitRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DonationsInitRequest;
export declare function DonationsInitRequestToJSON(value?: DonationsInitRequest | null): any;
