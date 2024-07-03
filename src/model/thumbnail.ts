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
* Generate a thumbnail image for the video or image at a specific point from the timeline.
*/
export class Thumbnail {
    /**
    * The point on the timeline in seconds to capture a single frame to use as the thumbnail image.
    */
    'capture': number;
    /**
    * Scale the thumbnail size to a fraction of the viewport size - i.e. setting the scale to 0.5 will scale  the thumbnail to half the size of the viewport.
    */
    'scale': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "capture",
            "baseName": "capture",
            "type": "number"
        },
        {
            "name": "scale",
            "baseName": "scale",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Thumbnail.attributeTypeMap;
    }
}

