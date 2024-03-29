/**
 * Shotstack
 * Shotstack is a video, image and audio editing service that allows for the automated generation of videos, images and audio using JSON and a RESTful API.  You arrange and configure an edit and POST it to the API which will render your media and provide a file location when complete.  For more details visit [shotstack.io](https://shotstack.io) or checkout our [getting started](https://shotstack.io/docs/guide/) documentation.  There are three API\'s, one for editing and generating assets (Edit API), one for managing hosted assets (Serve API) and one for ingesting and transforming source assets (Ingest API).  Each API has it\'s own base URL and collection of endpoints. Each API uses the same set of API keys.  **[Edit API](#shotstack-edit)** - [https://api.shotstack.io/edit/{version}](#)<br> Edit videos, images and audio assets in the cloud using a simple JSON schema and templates.  **[Serve API](#shotstack-serve)** - [https://api.shotstack.io/serve/{version}](#)<br> Inspect and manage the hosting of assets generated by the Edit and Ingest APIs.  **[Ingest API](#shotstack-ingest)** - [https://api.shotstack.io/ingest/{version}](#)<br> Ingest (upload, store and transform) source footage, images, audio and fonts to be used by the Edit API.  **[Create API](#shotstack-create)** - [https://api.shotstack.io/create/{version}](#)<br> Generate images, videos, voice overs and text using built in and third party generative AI providers. 
 *
 * The version of the OpenAPI document: v1
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