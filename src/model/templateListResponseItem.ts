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
* The individual template item returned with the  [TemplateListResponseData](#tocs_templatelistresponsedata) templates list.
*/
export class TemplateListResponseItem {
    /**
    * The unique id of the template in UUID format.
    */
    'id': string;
    /**
    * The template name
    */
    'name': string;
    /**
    * The time the template was created.
    */
    'created'?: string;
    /**
    * The time the template was last updated.
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
            "name": "name",
            "baseName": "name",
            "type": "string"
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
        return TemplateListResponseItem.attributeTypeMap;
    }
}

