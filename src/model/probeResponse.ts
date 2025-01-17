/**
 * Shotstack
 * Official Typescript SDK for the Shotstack Cloud Video Editing API
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* The response received after a [probe request](#inspect-media) is submitted. The probe requests returns data from FFprobe formatted as JSON.
*/
export class ProbeResponse {
    /**
    * `true` if media successfully read, else `false`.
    */
    'success': boolean;
    /**
    * `Created`, `Bad Request` or an error message.
    */
    'message': string;
    /**
    * The response from FFprobe in JSON format.
    */
    'response': object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "response",
            "baseName": "response",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return ProbeResponse.attributeTypeMap;
    }
}

