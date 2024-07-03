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
import { OpenAiGeneratedAssetOptions } from './openAiGeneratedAssetOptions';

/**
* Generate assets using OpenAI. OpenAI provide a text generation service using ChatGPT 3.5 and 4. The OpenAI provider works on a bring-your-own-key basis, credentials are required and must be added via the [dashboard](https://dashboard.shotstack.io/integrations/openai), not in the request.
*/
export class OpenAiGeneratedAsset {
    /**
    * The name of the provider - set to `openai` for OpenAI.
    */
    'provider': OpenAiGeneratedAsset.ProviderEnum = OpenAiGeneratedAsset.ProviderEnum.OPENAI;
    'options': OpenAiGeneratedAssetOptions;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "OpenAiGeneratedAsset.ProviderEnum"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "OpenAiGeneratedAssetOptions"
        }    ];

    static getAttributeTypeMap() {
        return OpenAiGeneratedAsset.attributeTypeMap;
    }
}

export namespace OpenAiGeneratedAsset {
    export enum ProviderEnum {
        OPENAI = <any> 'openai'
    }
}
