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
import * as runtime from '../runtime';
import type { DonationsInit200Response, DonationsInitRequest } from '../models/index';
export interface DonationsInitOperationRequest {
    donationsInitRequest: DonationsInitRequest;
}
/**
 *
 */
export declare class DonationsApi extends runtime.BaseAPI {
    /**
     */
    donationsInitRaw(requestParameters: DonationsInitOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DonationsInit200Response>>;
    /**
     */
    donationsInit(requestParameters: DonationsInitOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DonationsInit200Response>;
}