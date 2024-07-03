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
* The LumaAsset is used to create luma matte masks, transitions and effects between other assets. A luma matte is a grey scale image or animated video where the black areas are transparent and the white areas solid. The luma matte animation should be provided as an mp4 video file. The src must be a publicly accessible URL to the file.
*/
export class LumaAsset {
    /**
    * The type of asset - set to `luma` for luma mattes.
    */
    'type': string = 'luma';
    /**
    * The luma matte source URL. The URL must be publicly accessible or include credentials.
    */
    'src': string;
    /**
    * The start trim point of the luma matte clip, in seconds (defaults to 0). Videos will start from the in trim point. A luma matte video will play until the file ends or the Clip length is reached.
    */
    'trim'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "src",
            "baseName": "src",
            "type": "string"
        },
        {
            "name": "trim",
            "baseName": "trim",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return LumaAsset.attributeTypeMap;
    }
}

