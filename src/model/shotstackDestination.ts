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
* Send videos and assets to the  [Shotstack hosting and CDN](https://shotstack.io/docs/guide/serving-assets/destinations/shotstack/) service.  This destination is enabled by default.
*/
export class ShotstackDestination {
    /**
    * The destination to send assets to - set to `shotstack` for Shotstack hosting and CDN.
    */
    'provider': string = 'shotstack';
    /**
    * Set to `true` to [opt-out](https://shotstack.io/docs/guide/serving-assets/self-host/) from the Shotstack hosting and CDN service. All files must be downloaded within 24 hours of rendering.
    */
    'exclude'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "string"
        },
        {
            "name": "exclude",
            "baseName": "exclude",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ShotstackDestination.attributeTypeMap;
    }
}

