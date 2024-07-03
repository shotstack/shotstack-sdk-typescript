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
import { TemplateListResponseItem } from './templateListResponseItem';

/**
* The response data returned with the [TemplateListResponse](#tocs_templatelistresponse).
*/
export class TemplateListResponseData {
    /**
    * The owner id of the templates.
    */
    'owner': string;
    /**
    * The list of templates.
    */
    'templates': Array<TemplateListResponseItem>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "owner",
            "baseName": "owner",
            "type": "string"
        },
        {
            "name": "templates",
            "baseName": "templates",
            "type": "Array<TemplateListResponseItem>"
        }    ];

    static getAttributeTypeMap() {
        return TemplateListResponseData.attributeTypeMap;
    }
}

