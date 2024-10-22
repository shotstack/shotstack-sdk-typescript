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
import { DIDGeneratedAssetOptions } from './dIDGeneratedAssetOptions';

/**
* Generate assets using D-ID. D-ID provide a text-to-avatar service. The D-ID provider works on a bring-your-own-key basis, credentials are required and must be added via the  [dashboard](https://dashboard.shotstack.io/integrations/d-id), not in the request.
*/
export class DIDGeneratedAsset {
    /**
    * The name of the provider - set to `d-id` for D-ID.
    */
    'provider': DIDGeneratedAsset.ProviderEnum = DIDGeneratedAsset.ProviderEnum.D_ID;
    'options': DIDGeneratedAssetOptions;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "DIDGeneratedAsset.ProviderEnum"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "DIDGeneratedAssetOptions"
        }    ];

    static getAttributeTypeMap() {
        return DIDGeneratedAsset.attributeTypeMap;
    }
}

export namespace DIDGeneratedAsset {
    export enum ProviderEnum {
        D_ID = <any> 'd-id'
    }
}
