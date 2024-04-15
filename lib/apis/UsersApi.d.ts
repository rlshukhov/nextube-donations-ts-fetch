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
import type { UsersEmailConfirmationResend200Response, UsersEmailPasswordResetRequest, UsersEmailPasswordResetUpdateRequest, UsersProfileGet200Response, UsersRegister200Response, UsersRegisterRequest } from '../models/index';
export interface UsersEmailPasswordResetOperationRequest {
    usersEmailPasswordResetRequest: UsersEmailPasswordResetRequest;
}
export interface UsersEmailPasswordResetUpdateOperationRequest {
    usersEmailPasswordResetUpdateRequest: UsersEmailPasswordResetUpdateRequest;
}
export interface UsersLoginRequest {
    usersRegisterRequest: UsersRegisterRequest;
}
export interface UsersRegisterOperationRequest {
    usersRegisterRequest: UsersRegisterRequest;
}
/**
 *
 */
export declare class UsersApi extends runtime.BaseAPI {
    /**
     */
    usersEmailConfirmationResendRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersEmailConfirmationResend200Response>>;
    /**
     */
    usersEmailConfirmationResend(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersEmailConfirmationResend200Response>;
    /**
     */
    usersEmailPasswordResetRaw(requestParameters: UsersEmailPasswordResetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersEmailConfirmationResend200Response>>;
    /**
     */
    usersEmailPasswordReset(requestParameters: UsersEmailPasswordResetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersEmailConfirmationResend200Response>;
    /**
     */
    usersEmailPasswordResetUpdateRaw(requestParameters: UsersEmailPasswordResetUpdateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersEmailConfirmationResend200Response>>;
    /**
     */
    usersEmailPasswordResetUpdate(requestParameters: UsersEmailPasswordResetUpdateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersEmailConfirmationResend200Response>;
    /**
     */
    usersLoginRaw(requestParameters: UsersLoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersRegister200Response>>;
    /**
     */
    usersLogin(requestParameters: UsersLoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersRegister200Response>;
    /**
     */
    usersProfileGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersProfileGet200Response>>;
    /**
     */
    usersProfileGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersProfileGet200Response>;
    /**
     */
    usersRegisterRaw(requestParameters: UsersRegisterOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersRegister200Response>>;
    /**
     */
    usersRegister(requestParameters: UsersRegisterOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersRegister200Response>;
}
