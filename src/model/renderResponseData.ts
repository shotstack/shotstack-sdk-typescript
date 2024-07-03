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
import { Edit } from './edit';

/**
* The response data returned with the [RenderResponse](#tocs_renderresponse) including status and URL.
*/
export class RenderResponseData {
    /**
    * The id of the render task in UUID format.
    */
    'id': string;
    /**
    * The owner id of the render task.
    */
    'owner': string;
    /**
    * The customer subscription plan.
    */
    'plan'?: string;
    /**
    * The status of the render task. <ul>   <li>`queued` - render is queued waiting to be rendered</li>   <li>`fetching` - assets are being fetched</li>   <li>`rendering` - the asset is being rendered</li>   <li>`saving` - the final asset is being saved to storage</li>   <li>`done` - the asset is ready to be downloaded</li>   <li>`failed` - there was an error rendering the asset</li> </ul>
    */
    'status': RenderResponseData.StatusEnum;
    /**
    * An error message, only displayed if an error occurred.
    */
    'error'?: string;
    /**
    * The output video or audio length in seconds.
    */
    'duration'?: number;
    /**
    * The time taken to render the asset in milliseconds.
    */
    'renderTime'?: number;
    /**
    * The URL of the final asset. This will only be available if status is done. This is a temporary URL and will be deleted after 24 hours. By default all assets are copied to the Shotstack hosting and CDN destination.
    */
    'url'?: string;
    /**
    * The URL of the poster image if requested. This will only be available if status is done.
    */
    'poster'?: string | null;
    /**
    * The URL of the thumbnail image if requested. This will only be available if status is done.
    */
    'thumbnail'?: string | null;
    'data'?: Edit;
    /**
    * The time the render task was initially queued.
    */
    'created'?: string;
    /**
    * The time the render status was last updated.
    */
    'updated'?: string;

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
            "name": "plan",
            "baseName": "plan",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "RenderResponseData.StatusEnum"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "number"
        },
        {
            "name": "renderTime",
            "baseName": "renderTime",
            "type": "number"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "poster",
            "baseName": "poster",
            "type": "string"
        },
        {
            "name": "thumbnail",
            "baseName": "thumbnail",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Edit"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "string"
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RenderResponseData.attributeTypeMap;
    }
}

export namespace RenderResponseData {
    export enum StatusEnum {
        QUEUED = <any> 'queued',
        FETCHING = <any> 'fetching',
        RENDERING = <any> 'rendering',
        SAVING = <any> 'saving',
        DONE = <any> 'done',
        FAILED = <any> 'failed'
    }
}
