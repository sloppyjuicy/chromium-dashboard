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
 * @interface GetIntentResponse
 */
export interface GetIntentResponse {
    /**
     * 
     * @type {string}
     * @memberof GetIntentResponse
     */
    subject: string;
    /**
     * 
     * @type {string}
     * @memberof GetIntentResponse
     */
    email_body: string;
}

/**
 * Check if a given object implements the GetIntentResponse interface.
 */
export function instanceOfGetIntentResponse(value: object): value is GetIntentResponse {
    if (!('subject' in value) || value['subject'] === undefined) return false;
    if (!('email_body' in value) || value['email_body'] === undefined) return false;
    return true;
}

export function GetIntentResponseFromJSON(json: any): GetIntentResponse {
    return GetIntentResponseFromJSONTyped(json, false);
}

export function GetIntentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetIntentResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'subject': json['subject'],
        'email_body': json['email_body'],
    };
}

export function GetIntentResponseToJSON(value?: GetIntentResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'subject': value['subject'],
        'email_body': value['email_body'],
    };
}
