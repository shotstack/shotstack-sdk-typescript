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
import { HeyGenGeneratedAssetOptions } from './heyGenGeneratedAssetOptions';

/**
* Generate assets using HeyGen. HeyGen provide a text-to-avatar service.  The HeyGen provider works on a bring-your-own-key basis, credentials are required and must be added via the  [dashboard](https://dashboard.shotstack.io/integrations/heygen), not in the request.
*/
export class HeyGenGeneratedAsset {
    /**
    * The name of the provider - set to `heygen` for HeyGen.
    */
    'provider': HeyGenGeneratedAsset.ProviderEnum = HeyGenGeneratedAsset.ProviderEnum.HEYGEN;
    'options': HeyGenGeneratedAssetOptions;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "HeyGenGeneratedAsset.ProviderEnum"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "HeyGenGeneratedAssetOptions"
        }    ];

    static getAttributeTypeMap() {
        return HeyGenGeneratedAsset.attributeTypeMap;
    }
}

export namespace HeyGenGeneratedAsset {
    export enum ProviderEnum {
        HEYGEN = <any> 'heygen'
    }
}
