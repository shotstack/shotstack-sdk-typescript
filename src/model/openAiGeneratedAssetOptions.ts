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
import { OpenAiTextGeneratorOptions } from './openAiTextGeneratorOptions';

/**
* Generate assets using OpenAI provider AI services.  The following AI generation services are available: <ul>   <li><a href=\"#tocs_openaitextgeneratoroptions\">OpenAiTextGeneratorOptions</a></li> </ul>
*/
export class OpenAiGeneratedAssetOptions {
    /**
    * The type of asset to generate - set to `text-generator` for text generation.
    */
    'type': OpenAiGeneratedAssetOptions.TypeEnum = OpenAiGeneratedAssetOptions.TypeEnum.TEXT_GENERATOR;
    /**
    * The text prompt to generate text from.
    */
    'prompt': string;
    /**
    * The model to use for generating the text. Select from the list of available models: <ul>   <li>`gpt-3.5-turbo`</li>   <li>`gpt-4`</li> </ul>
    */
    'model': OpenAiGeneratedAssetOptions.ModelEnum;
    /**
    * The system prompt to use for generating the text. This is an optional prompt that can be used to provide context or additional information to the model.
    */
    'systemPrompt'?: string;

    static discriminator: string | undefined = "type";

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "OpenAiGeneratedAssetOptions.TypeEnum"
        },
        {
            "name": "prompt",
            "baseName": "prompt",
            "type": "string"
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "OpenAiGeneratedAssetOptions.ModelEnum"
        },
        {
            "name": "systemPrompt",
            "baseName": "systemPrompt",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OpenAiGeneratedAssetOptions.attributeTypeMap;
    }
}

export namespace OpenAiGeneratedAssetOptions {
    export enum TypeEnum {
        TEXT_GENERATOR = <any> 'text-generator'
    }
    export enum ModelEnum {
        _3_5_TURBO = <any> 'gpt-3.5-turbo',
        _4 = <any> 'gpt-4'
    }
}