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

/**
* The response data returned with the [QueuedResponse](#tocs_queuedresponse).
*/
export class QueuedResponseData {
    /**
    * Success response message or error details.
    */
    'message': string;
    /**
    * The id of the render task in UUID format.
    */
    'id': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return QueuedResponseData.attributeTypeMap;
    }
}

