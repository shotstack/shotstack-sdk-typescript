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
import { IngestErrorResponseData } from './ingestErrorResponseData';

/**
* Error response data for validation and other errors returned by the Ingest API.
*/
export class IngestErrorResponse {
    /**
    * An array of errors.
    */
    'errors': Array<IngestErrorResponseData>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<IngestErrorResponseData>"
        }    ];

    static getAttributeTypeMap() {
        return IngestErrorResponse.attributeTypeMap;
    }
}

