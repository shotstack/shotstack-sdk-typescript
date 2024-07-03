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
import { Crop } from './crop';

/**
* The ImageAsset is used to create video from images to compose an image. The src must be a publicly accessible URL to an image resource such as a jpg or png file.
*/
export class ImageAsset {
    /**
    * The type of asset - set to `image` for images.
    */
    'type': string = 'image';
    /**
    * The image source URL. The URL must be publicly accessible or include credentials.
    */
    'src': string;
    'crop'?: Crop;

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
            "name": "crop",
            "baseName": "crop",
            "type": "Crop"
        }    ];

    static getAttributeTypeMap() {
        return ImageAsset.attributeTypeMap;
    }
}

