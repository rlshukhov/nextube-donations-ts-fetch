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
import type { City } from './City';
import type { Country } from './Country';
import type { Region } from './Region';
/**
 *
 * @export
 * @interface Geo
 */
export interface Geo {
    /**
     *
     * @type {City}
     * @memberof Geo
     */
    city: City;
    /**
     *
     * @type {Region}
     * @memberof Geo
     */
    region: Region;
    /**
     *
     * @type {Country}
     * @memberof Geo
     */
    country: Country;
}
/**
 * Check if a given object implements the Geo interface.
 */
export declare function instanceOfGeo(value: object): boolean;
export declare function GeoFromJSON(json: any): Geo;
export declare function GeoFromJSONTyped(json: any, ignoreDiscriminator: boolean): Geo;
export declare function GeoToJSON(value?: Geo | null): any;
