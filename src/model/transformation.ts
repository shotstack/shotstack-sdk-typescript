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
import { FlipTransformation } from './flipTransformation';
import { RotateTransformation } from './rotateTransformation';
import { SkewTransformation } from './skewTransformation';

/**
* Apply one or more transformations to a clip. Transformations alter the visual properties of a clip and can be combined to create new shapes and effects.
*/
export class Transformation {
    'rotate'?: RotateTransformation;
    'skew'?: SkewTransformation;
    'flip'?: FlipTransformation;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rotate",
            "baseName": "rotate",
            "type": "RotateTransformation"
        },
        {
            "name": "skew",
            "baseName": "skew",
            "type": "SkewTransformation"
        },
        {
            "name": "flip",
            "baseName": "flip",
            "type": "FlipTransformation"
        }    ];

    static getAttributeTypeMap() {
        return Transformation.attributeTypeMap;
    }
}

