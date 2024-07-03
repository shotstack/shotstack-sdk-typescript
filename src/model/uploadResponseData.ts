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
import { UploadResponseAttributes } from './uploadResponseAttributes';

/**
* The type of resource (an upload), it\'s id and attributes of the upload request.
*/
export class UploadResponseData {
    /**
    * The type of resource, in this case it is an upload.
    */
    'type': string;
    /**
    * The upload file id.
    */
    'id': string;
    'attributes': UploadResponseAttributes;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "UploadResponseAttributes"
        }    ];

    static getAttributeTypeMap() {
        return UploadResponseData.attributeTypeMap;
    }
}

