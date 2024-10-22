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
* The transfer request attributes inlcudling the user specified ID and status. Returned with [TransferResponseData](#tocs_transferresponsedata).
*/
export class TransferResponseAttributes {
    /**
    * The user provided ID for the asset
    */
    'id'?: string;
    /**
    * The attributes of the asset transfer including the status.
    */
    'owner'?: string;
    /**
    * The status of the asset transfer. <ul>   <li>`queued` - the transfer request has been queued</li>   <li>`failed` - the transfer request failed</li> </ul>
    */
    'status'?: TransferResponseAttributes.StatusEnum;
    /**
    * The time the asset transfer was created.
    */
    'created'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TransferResponseAttributes.StatusEnum"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransferResponseAttributes.attributeTypeMap;
    }
}

export namespace TransferResponseAttributes {
    export enum StatusEnum {
        QUEUED = <any> 'queued',
        FAILED = <any> 'failed'
    }
}
