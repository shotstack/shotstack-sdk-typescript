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
import { Font } from './font';
import { Soundtrack } from './soundtrack';
import { Track } from './track';

/**
* A timeline represents the contents of a video edit over time, an audio edit over time, in seconds, or an image layout. A timeline consists of layers called tracks. Tracks are composed of titles, images, audio, html or video segments referred to as clips which are placed along the track at specific starting point and lasting for a specific amount of time.
*/
export class Timeline {
    'soundtrack'?: Soundtrack;
    /**
    * A hexadecimal value for the timeline background colour. Defaults to #000000 (black).
    */
    'background'?: string;
    /**
    * An array of custom fonts to be downloaded for use by the HTML assets.
    */
    'fonts'?: Array<Font>;
    /**
    * A timeline consists of an array of tracks, each track containing clips. Tracks are layered on top of each other in the same order they are added to the array with the top most track layered over the top of those below it. Ensure that a track containing titles is the top most track so that it is displayed above videos and images.
    */
    'tracks': Array<Track>;
    /**
    * Disable the caching of ingested source footage and assets. See  [caching](https://shotstack.io/docs/guide/architecting-an-application/caching/) for more details.
    */
    'cache'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "soundtrack",
            "baseName": "soundtrack",
            "type": "Soundtrack"
        },
        {
            "name": "background",
            "baseName": "background",
            "type": "string"
        },
        {
            "name": "fonts",
            "baseName": "fonts",
            "type": "Array<Font>"
        },
        {
            "name": "tracks",
            "baseName": "tracks",
            "type": "Array<Track>"
        },
        {
            "name": "cache",
            "baseName": "cache",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Timeline.attributeTypeMap;
    }
}

