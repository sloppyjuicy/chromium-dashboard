/* tslint:disable */
/* eslint-disable */
/**
 * chomestatus API
 * The API for chromestatus.com. chromestatus.com is the official tool used for tracking feature launches in Blink (the browser engine that powers Chrome and many other web browsers). This tool guides feature owners through our launch process and serves as a primary source for developer information that then ripples throughout the web developer ecosystem. More details at: https://github.com/GoogleChrome/chromium-dashboard
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SignInRequest
 */
export interface SignInRequest {
    /**
     * The credential generated by Sign-In With Google.
     * @type {string}
     * @memberof SignInRequest
     */
    credential: string;
}

/**
 * Check if a given object implements the SignInRequest interface.
 */
export function instanceOfSignInRequest(value: object): value is SignInRequest {
    if (!('credential' in value) || value['credential'] === undefined) return false;
    return true;
}

export function SignInRequestFromJSON(json: any): SignInRequest {
    return SignInRequestFromJSONTyped(json, false);
}

export function SignInRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignInRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'credential': json['credential'],
    };
}

export function SignInRequestToJSON(value?: SignInRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'credential': value['credential'],
    };
}

