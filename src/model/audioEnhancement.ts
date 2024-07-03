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
import { DolbyEnhancement } from './dolbyEnhancement';
import { DolbyEnhancementOptions } from './dolbyEnhancementOptions';

/**
* An audio enhancement that can be applied to the audio content of a rendition. The following providers are available: <ul>   <li><a href=\"#tocs_dolbyenhancement\">DolbyEnhancement</a></li> </ul>
*/
export class AudioEnhancement {
    /**
    * The enhancement provider to use - set to `dolby` for Dolby.
    */
    'provider': string = 'dolby';
    'options': DolbyEnhancementOptions;

    static discriminator: string | undefined = "enhancement";

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
        return AudioEnhancement.attributeTypeMap;
    }
}

