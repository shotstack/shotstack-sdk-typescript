/**
 * Shotstack
 * Official PHP SDK for the Shotstack Cloud Video Editing API
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { QueuedResponseData } from './queuedResponseData';

/**
* The response received after a [render request](#render-asset) or [template render](#render-template) is submitted. The render task is queued for rendering and a unique render id is returned.
*/
export class QueuedResponse {
    /**
    * `true` if successfully queued, else `false`.
    */
    'success': boolean;
    /**
    * `Created`, `Bad Request` or an error message.
    */
    'message': string;
    'response': QueuedResponseData;

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
            "type": "QueuedResponseData"
        }    ];

    static getAttributeTypeMap() {
        return QueuedResponse.attributeTypeMap;
    }
}

