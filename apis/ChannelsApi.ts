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


import * as runtime from '../runtime';
import type {
  ChannelsCreate200Response,
  ChannelsCreateRequest,
  ChannelsFeaturedList200Response,
  ChannelsOwnedList200Response,
  ChannelsPublicIdGet200Response,
  ChannelsUpdateRequest,
} from '../models/index';
import {
    ChannelsCreate200ResponseFromJSON,
    ChannelsCreate200ResponseToJSON,
    ChannelsCreateRequestFromJSON,
    ChannelsCreateRequestToJSON,
    ChannelsFeaturedList200ResponseFromJSON,
    ChannelsFeaturedList200ResponseToJSON,
    ChannelsOwnedList200ResponseFromJSON,
    ChannelsOwnedList200ResponseToJSON,
    ChannelsPublicIdGet200ResponseFromJSON,
    ChannelsPublicIdGet200ResponseToJSON,
    ChannelsUpdateRequestFromJSON,
    ChannelsUpdateRequestToJSON,
} from '../models/index';

export interface ChannelsCreateOperationRequest {
    channelsCreateRequest: ChannelsCreateRequest;
}

export interface ChannelsFeaturedListRequest {
    limit: number;
    offset: number;
}

export interface ChannelsOwnedGetRequest {
    id: string;
}

export interface ChannelsOwnedListRequest {
    limit: number;
    offset: number;
}

export interface ChannelsPublicIdGetRequest {
    id: string;
}

export interface ChannelsPublicNameGetRequest {
    name: string;
}

export interface ChannelsUpdateOperationRequest {
    channelsUpdateRequest: ChannelsUpdateRequest;
}

/**
 * 
 */
export class ChannelsApi extends runtime.BaseAPI {

    /**
     */
    async channelsCreateRaw(requestParameters: ChannelsCreateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChannelsCreate200Response>> {
        if (requestParameters['channelsCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'channelsCreateRequest',
                'Required parameter "channelsCreateRequest" was null or undefined when calling channelsCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Session-Token"] = await this.configuration.apiKey("X-Session-Token"); // Token authentication
        }

        const response = await this.request({
            path: `/api/v1/channels`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ChannelsCreateRequestToJSON(requestParameters['channelsCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChannelsCreate200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async channelsCreate(requestParameters: ChannelsCreateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChannelsCreate200Response> {
        const response = await this.channelsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async channelsFeaturedListRaw(requestParameters: ChannelsFeaturedListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChannelsFeaturedList200Response>> {
        if (requestParameters['limit'] == null) {
            throw new runtime.RequiredError(
                'limit',
                'Required parameter "limit" was null or undefined when calling channelsFeaturedList().'
            );
        }

        if (requestParameters['offset'] == null) {
            throw new runtime.RequiredError(
                'offset',
                'Required parameter "offset" was null or undefined when calling channelsFeaturedList().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/channels/featured`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChannelsFeaturedList200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async channelsFeaturedList(requestParameters: ChannelsFeaturedListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChannelsFeaturedList200Response> {
        const response = await this.channelsFeaturedListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async channelsOwnedGetRaw(requestParameters: ChannelsOwnedGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChannelsCreate200Response>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling channelsOwnedGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Session-Token"] = await this.configuration.apiKey("X-Session-Token"); // Token authentication
        }

        const response = await this.request({
            path: `/api/v1/channels/owned/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChannelsCreate200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async channelsOwnedGet(requestParameters: ChannelsOwnedGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChannelsCreate200Response> {
        const response = await this.channelsOwnedGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async channelsOwnedListRaw(requestParameters: ChannelsOwnedListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChannelsOwnedList200Response>> {
        if (requestParameters['limit'] == null) {
            throw new runtime.RequiredError(
                'limit',
                'Required parameter "limit" was null or undefined when calling channelsOwnedList().'
            );
        }

        if (requestParameters['offset'] == null) {
            throw new runtime.RequiredError(
                'offset',
                'Required parameter "offset" was null or undefined when calling channelsOwnedList().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Session-Token"] = await this.configuration.apiKey("X-Session-Token"); // Token authentication
        }

        const response = await this.request({
            path: `/api/v1/channels/owned`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChannelsOwnedList200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async channelsOwnedList(requestParameters: ChannelsOwnedListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChannelsOwnedList200Response> {
        const response = await this.channelsOwnedListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async channelsPublicIdGetRaw(requestParameters: ChannelsPublicIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChannelsPublicIdGet200Response>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling channelsPublicIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/channels/public/id/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChannelsPublicIdGet200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async channelsPublicIdGet(requestParameters: ChannelsPublicIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChannelsPublicIdGet200Response> {
        const response = await this.channelsPublicIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async channelsPublicNameGetRaw(requestParameters: ChannelsPublicNameGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChannelsPublicIdGet200Response>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling channelsPublicNameGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/channels/public/name/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChannelsPublicIdGet200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async channelsPublicNameGet(requestParameters: ChannelsPublicNameGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChannelsPublicIdGet200Response> {
        const response = await this.channelsPublicNameGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async channelsUpdateRaw(requestParameters: ChannelsUpdateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChannelsCreate200Response>> {
        if (requestParameters['channelsUpdateRequest'] == null) {
            throw new runtime.RequiredError(
                'channelsUpdateRequest',
                'Required parameter "channelsUpdateRequest" was null or undefined when calling channelsUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Session-Token"] = await this.configuration.apiKey("X-Session-Token"); // Token authentication
        }

        const response = await this.request({
            path: `/api/v1/channels`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ChannelsUpdateRequestToJSON(requestParameters['channelsUpdateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChannelsCreate200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async channelsUpdate(requestParameters: ChannelsUpdateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChannelsCreate200Response> {
        const response = await this.channelsUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
