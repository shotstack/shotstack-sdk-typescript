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
import { DolbyEnhancementOptions } from './dolbyEnhancementOptions';

/**
* Dolby.io audio enhancement provider. Credentials are required and must be added via the  [dashboard](https://dashboard.shotstack.io/integrations/dolby), not in the request.
*/
export class DolbyEnhancement {
    /**
    * The enhancement provider to use - set to `dolby` for Dolby.
    */
    'provider': string = 'dolby';
    'options': DolbyEnhancementOptions;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "string"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "DolbyEnhancementOptions"
        }    ];

    static getAttributeTypeMap() {
        return DolbyEnhancement.attributeTypeMap;
    }
}

