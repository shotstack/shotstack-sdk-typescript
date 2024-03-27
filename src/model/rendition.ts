/**
 * Shotstack
 * Shotstack is a video, image and audio editing service that allows for the automated generation of videos, images and audio using JSON and a RESTful API.  You arrange and configure an edit and POST it to the API which will render your media and provide a file location when complete.  For more details visit [shotstack.io](https://shotstack.io) or checkout our [getting started](https://shotstack.io/docs/guide/) documentation.  There are three API\'s, one for editing and generating assets (Edit API), one for managing hosted assets (Serve API) and one for ingesting and transforming source assets (Ingest API).  Each API has it\'s own base URL and collection of endpoints. Each API uses the same set of API keys.  **[Edit API](#shotstack-edit)** - [https://api.shotstack.io/edit/{version}](#)<br> Edit videos, images and audio assets in the cloud using a simple JSON schema and templates.  **[Serve API](#shotstack-serve)** - [https://api.shotstack.io/serve/{version}](#)<br> Inspect and manage the hosting of assets generated by the Edit and Ingest APIs.  **[Ingest API](#shotstack-ingest)** - [https://api.shotstack.io/ingest/{version}](#)<br> Ingest (upload, store and transform) source footage, images, audio and fonts to be used by the Edit API.  **[Create API](#shotstack-create)** - [https://api.shotstack.io/create/{version}](#)<br> Generate images, videos, voice overs and text using built in and third party generative AI providers. 
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Size } from './size';

/**
* A rendition is a new output file that is generated from the source. The rendition can be encoded to a different format and have transformations applied to it such as resizing, cropping, etc...
*/
export class Rendition {
    /**
    * The output format to encode the file to. You can only encode a file to the same type, i.e. a video to a video or an image to an image. You can\'t encode a video as an image. The following formats are available: <ul>   <li>`mp4` - mp4 video file (video only)</li>   <li>`jpg` - jpg image file (image only)</li>   <li>`png` - png image file (image only)</li>   <li>`mp3` - mp3 audio file (audio only)</li> </ul>
    */
    'format'?: Rendition.FormatEnum;
    'size'?: Size;
    /**
    * Set how the rendition should be scaled and cropped when using a size with an aspect ratio that is different from the source. Fit applies to both videos and images. <ul>   <li>`crop` <b>(default)</b> - scale the rendition to fill the output area while maintaining the aspect ratio. The rendition will be cropped if it exceeds the bounds of the output.</li>   <li>`cover` - stretch the rendition to fill the output without maintaining the aspect ratio.</li>   <li>`contain` - fit the entire rendition within the output while maintaining the original aspect ratio.</li> </ul>
    */
    'fit'?: Rendition.FitEnum;
    /**
    * The output resolution of the video or image. This is a convenience property that sets the width and height based on industry standard resolutions. The following resolutions are available: <ul>   <li>`preview` - 512px x 288px</li>   <li>`mobile` - 640px x 360px</li>   <li>`sd` - 1024px x 576px</li>   <li>`hd` - 1280px x 720px</li>   <li>`fhd` - 1920px x 1080px</li> </ul>
    */
    'resolution'?: Rendition.ResolutionEnum;
    /**
    * Adjust the visual quality of the video or image. The higher the value, the sharper the image quality but the larger file size and slower the encoding process. When specifying quality, the goal is to balance file size vs visual quality. Quality is a value between 1 and 100 where 1 is fully compressed with low image quality and 100 is close to lossless with high image quality and large file size. Sane values are between 50 and 75. Omitting the quality parameter will result in an asset optimised for encoding speed, file size and visual quality.
    */
    'quality'?: number;
    /**
    * Change the frame rate of a video asset. <ul>   <li>`12` - 12fps</li>   <li>`15` - 15fps</li>   <li>`24` - 24fps</li>   <li>`23.976` - 23.976fps</li>   <li>`25` (default) - 25fps</li>   <li>`29.97` - 29.97fps</li>   <li>`30` - 30fps</li>   <li>`48` - 48fps</li>   <li>`50` - 50fps</li>   <li>`59.94` - 59.94fps</li>   <li>`60` - 60fps</li> </ul>
    */
    'fps'?: Rendition.FpsEnum;
    /**
    * A custom name for the generated rendition file. The file extension will be automatically added based on the format of the rendition. If no filename is provided, the rendition ID will be used.
    */
    'filename'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "format",
            "baseName": "format",
            "type": "Rendition.FormatEnum"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "Size"
        },
        {
            "name": "fit",
            "baseName": "fit",
            "type": "Rendition.FitEnum"
        },
        {
            "name": "resolution",
            "baseName": "resolution",
            "type": "Rendition.ResolutionEnum"
        },
        {
            "name": "quality",
            "baseName": "quality",
            "type": "number"
        },
        {
            "name": "fps",
            "baseName": "fps",
            "type": "Rendition.FpsEnum"
        },
        {
            "name": "filename",
            "baseName": "filename",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Rendition.attributeTypeMap;
    }
}

export namespace Rendition {
    export enum FormatEnum {
        Mp4 = <any> 'mp4',
        Mp3 = <any> 'mp3',
        Jpg = <any> 'jpg',
        Png = <any> 'png'
    }
    export enum FitEnum {
        Cover = <any> 'cover',
        Contain = <any> 'contain',
        Crop = <any> 'crop'
    }
    export enum ResolutionEnum {
        Preview = <any> 'preview',
        Mobile = <any> 'mobile',
        Sd = <any> 'sd',
        Hd = <any> 'hd',
        Fhd = <any> 'fhd'
    }
    export enum FpsEnum {
        NUMBER_12 = <any> 12,
        NUMBER_15 = <any> 15,
        NUMBER_23_DOT_976 = <any> 23.976,
        NUMBER_24 = <any> 24,
        NUMBER_25 = <any> 25,
        NUMBER_29_DOT_97 = <any> 29.97,
        NUMBER_30 = <any> 30,
        NUMBER_48 = <any> 48,
        NUMBER_50 = <any> 50,
        NUMBER_59_DOT_94 = <any> 59.94,
        NUMBER_60 = <any> 60
    }
}