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
 * @interface ChannelsCreateRequestTranslationsEn
 */
export interface ChannelsCreateRequestTranslationsEn {
    /**
     *
     * @type {string}
     * @memberof ChannelsCreateRequestTranslationsEn
     */
    title: string;
    /**
     *
     * @type {string}
     * @memberof ChannelsCreateRequestTranslationsEn
     */
    description?: string;
}
/**
 * Check if a given object implements the ChannelsCreateRequestTranslationsEn interface.
 */
export declare function instanceOfChannelsCreateRequestTranslationsEn(value: object): boolean;
export declare function ChannelsCreateRequestTranslationsEnFromJSON(json: any): ChannelsCreateRequestTranslationsEn;
export declare function ChannelsCreateRequestTranslationsEnFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelsCreateRequestTranslationsEn;
export declare function ChannelsCreateRequestTranslationsEnToJSON(value?: ChannelsCreateRequestTranslationsEn | null): any;
