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
import type { OriginTrialsInfo } from './OriginTrialsInfo';
import {
    OriginTrialsInfoFromJSON,
    OriginTrialsInfoFromJSONTyped,
    OriginTrialsInfoToJSON,
} from './OriginTrialsInfo';

/**
 * 
 * @export
 * @interface GetOriginTrialsResponse
 */
export interface GetOriginTrialsResponse {
    /**
     * 
     * @type {Array<OriginTrialsInfo>}
     * @memberof GetOriginTrialsResponse
     */
    origin_trials?: Array<OriginTrialsInfo>;
}

/**
 * Check if a given object implements the GetOriginTrialsResponse interface.
 */
export function instanceOfGetOriginTrialsResponse(value: object): value is GetOriginTrialsResponse {
    return true;
}

export function GetOriginTrialsResponseFromJSON(json: any): GetOriginTrialsResponse {
    return GetOriginTrialsResponseFromJSONTyped(json, false);
}

export function GetOriginTrialsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetOriginTrialsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'origin_trials': json['origin_trials'] == null ? undefined : ((json['origin_trials'] as Array<any>).map(OriginTrialsInfoFromJSON)),
    };
}

export function GetOriginTrialsResponseToJSON(value?: GetOriginTrialsResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'origin_trials': value['origin_trials'] == null ? undefined : ((value['origin_trials'] as Array<any>).map(OriginTrialsInfoToJSON)),
    };
}
