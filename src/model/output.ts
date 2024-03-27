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
import { Destinations } from './destinations';
import { Poster } from './poster';
import { Range } from './range';
import { Size } from './size';
import { Thumbnail } from './thumbnail';

/**
* The output format, render range and type of media to generate.
*/
export class Output {
    /**
    * The output format and type of media file to generate. <ul>   <li>`mp4` - mp4 video file</li>   <li>`gif` - animated gif</li>   <li>`jpg` - jpg image file</li>   <li>`png` - png image file</li>   <li>`bmp` - bmp image file</li>   <li>`mp3` - mp3 audio file (audio only)</li> </ul>
    */
    'format': Output.FormatEnum;
    /**
    * The output resolution of the video or image. <ul>   <li>`preview` - 512px x 288px @ 15fps</li>   <li>`mobile` - 640px x 360px @ 25fps</li>   <li>`sd` - 1024px x 576px @ 25fps</li>   <li>`hd` - 1280px x 720px @ 25fps</li>   <li>`1080` - 1920px x 1080px @ 25fps</li> </ul>
    */
    'resolution'?: Output.ResolutionEnum;
    /**
    * The aspect ratio (shape) of the video or image. Useful for social media output formats. Options are: <ul>   <li>`16:9` (default) - regular landscape/horizontal aspect ratio</li>   <li>`9:16` - vertical/portrait aspect ratio</li>   <li>`1:1` - square aspect ratio</li>   <li>`4:5` - short vertical/portrait aspect ratio</li>   <li>`4:3` - legacy TV aspect ratio</li> </ul>
    */
    'aspectRatio'?: Output.AspectRatioEnum;
    'size'?: Size;
    /**
    * Override the default frames per second. Useful for when the source footage is recorded at 30fps, i.e. on  mobile devices. Lower frame rates can be used to add cinematic quality (24fps) or to create smaller file size/faster render times or animated gifs (12 or 15fps). Default is 25fps. <ul>   <li>`12` - 12fps</li>   <li>`15` - 15fps</li>   <li>`24` - 24fps</li>   <li>`23.976` - 23.976fps</li>   <li>`25` (default) - 25fps</li>   <li>`29.97` - 29.97fps</li>   <li>`30` - 30fps</li>   <li>`48` - 48fps</li>   <li>`50` - 50fps</li>   <li>`59.94` - 59.94fps</li>   <li>`60` - 60fps</li> </ul>
    */
    'fps'?: Output.FpsEnum;
    /**
    * Override the resolution and scale the video or image to render at a different size. When using scaleTo the asset should be edited at the resolution dimensions, i.e. use font sizes that look best at HD, then use scaleTo to output the file at SD and the text will be scaled to the correct size. This is useful if you want to create multiple asset sizes. <ul>   <li>`preview` - 512px x 288px @ 15fps</li>   <li>`mobile` - 640px x 360px @ 25fps</li>   <li>`sd` - 1024px x 576px @25fps</li>   <li>`hd` - 1280px x 720px @25fps</li>   <li>`1080` - 1920px x 1080px @25fps</li> </ul>
    */
    'scaleTo'?: Output.ScaleToEnum;
    /**
    * Adjust the output quality of the video, image or audio. Adjusting quality affects  render speed, download speeds and storage requirements due to file size. The default `medium` provides the most optimized choice for all three  factors. <ul>   <li>`low` - slightly reduced quality, smaller file size</li>   <li>`medium` (default) - optimized quality, render speeds and file size</li>   <li>`high` - slightly increased quality, larger file size</li> </ul>
    */
    'quality'?: Output.QualityEnum;
    /**
    * Loop settings for gif files. Set to `true` to loop, `false` to play only once.
    */
    'repeat'?: boolean;
    /**
    * Mute the audio track of the output video. Set to `true` to mute, `false` to un-mute.
    */
    'mute'?: boolean;
    'range'?: Range;
    'poster'?: Poster;
    'thumbnail'?: Thumbnail;
    /**
    * Specify the storage locations and hosting services to send rendered videos to.
    */
    'destinations'?: Array<Destinations>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "format",
            "baseName": "format",
            "type": "Output.FormatEnum"
        },
        {
            "name": "resolution",
            "baseName": "resolution",
            "type": "Output.ResolutionEnum"
        },
        {
            "name": "aspectRatio",
            "baseName": "aspectRatio",
            "type": "Output.AspectRatioEnum"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "Size"
        },
        {
            "name": "fps",
            "baseName": "fps",
            "type": "Output.FpsEnum"
        },
        {
            "name": "scaleTo",
            "baseName": "scaleTo",
            "type": "Output.ScaleToEnum"
        },
        {
            "name": "quality",
            "baseName": "quality",
            "type": "Output.QualityEnum"
        },
        {
            "name": "repeat",
            "baseName": "repeat",
            "type": "boolean"
        },
        {
            "name": "mute",
            "baseName": "mute",
            "type": "boolean"
        },
        {
            "name": "range",
            "baseName": "range",
            "type": "Range"
        },
        {
            "name": "poster",
            "baseName": "poster",
            "type": "Poster"
        },
        {
            "name": "thumbnail",
            "baseName": "thumbnail",
            "type": "Thumbnail"
        },
        {
            "name": "destinations",
            "baseName": "destinations",
            "type": "Array<Destinations>"
        }    ];

    static getAttributeTypeMap() {
        return Output.attributeTypeMap;
    }
}

export namespace Output {
    export enum FormatEnum {
        Mp4 = <any> 'mp4',
        Gif = <any> 'gif',
        Mp3 = <any> 'mp3',
        Jpg = <any> 'jpg',
        Png = <any> 'png',
        Bmp = <any> 'bmp'
    }
    export enum ResolutionEnum {
        Preview = <any> 'preview',
        Mobile = <any> 'mobile',
        Sd = <any> 'sd',
        Hd = <any> 'hd',
        _1080 = <any> '1080'
    }
    export enum AspectRatioEnum {
        _169 = <any> '16:9',
        _916 = <any> '9:16',
        _11 = <any> '1:1',
        _45 = <any> '4:5',
        _43 = <any> '4:3'
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
    export enum ScaleToEnum {
        Preview = <any> 'preview',
        Mobile = <any> 'mobile',
        Sd = <any> 'sd',
        Hd = <any> 'hd',
        _1080 = <any> '1080'
    }
    export enum QualityEnum {
        Low = <any> 'low',
        Medium = <any> 'medium',
        High = <any> 'high'
    }
}