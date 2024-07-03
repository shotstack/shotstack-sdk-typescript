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
* Skew a clip so its edges are sheared at an angle. Use values between 0 and 3. Over 3 the clip will be skewed almost flat.
*/
export class SkewTransformation {
    /**
    * Skew the clip along it\'s x axis.
    */
    'x'?: number;
    /**
    * Skew the clip along it\'s y axis.
    */
    'y'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "x",
            "baseName": "x",
            "type": "number"
        },
        {
            "name": "y",
            "baseName": "y",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SkewTransformation.attributeTypeMap;
    }
}

