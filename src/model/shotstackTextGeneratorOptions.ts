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
* Options for the Shotstack text-generator service. Set a text prompt that will be used to generate a new body of text. The output will be generated as a text (txt) file available at the URL returned in the response.
*/
export class ShotstackTextGeneratorOptions {
    /**
    * The type of asset to generate - set to `text-generator` for text generation.
    */
    'type': ShotstackTextGeneratorOptions.TypeEnum = ShotstackTextGeneratorOptions.TypeEnum.TEXT_GENERATOR;
    /**
    * The text prompt to generate text from.
    */
    'prompt': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ShotstackTextGeneratorOptions.TypeEnum"
        },
        {
            "name": "prompt",
            "baseName": "prompt",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ShotstackTextGeneratorOptions.attributeTypeMap;
    }
}

export namespace ShotstackTextGeneratorOptions {
    export enum TypeEnum {
        TEXT_GENERATOR = <any> 'text-generator'
    }
}
