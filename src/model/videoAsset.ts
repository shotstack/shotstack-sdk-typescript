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
import { Crop } from './crop';

/**
* The VideoAsset is used to create video sequences from video files. The src must be a publicly accessible URL to a video resource such as an mp4 file.
*/
export class VideoAsset {
    /**
    * The type of asset - set to `video` for videos.
    */
    'type': string = 'video';
    /**
    * The video source URL. The URL must be publicly accessible or include credentials.
    */
    'src': string;
    /**
    * The start trim point of the video clip, in seconds (defaults to 0). Videos will start from the in trim point. The video will play until the file ends or the Clip length is reached.
    */
    'trim'?: number;
    /**
    * Set the volume for the video clip between 0 and 1 where 0 is muted and 1 is full volume (defaults to 1).
    */
    'volume'?: number;
    /**
    * The volume effect to apply to the video asset <ul>   <li>`fadeIn` - fade volume in only</li>   <li>`fadeOut` - fade volume out only</li>   <li>`fadeInFadeOut` - fade volume in and out</li> </ul>
    */
    'volumeEffect'?: VideoAsset.VolumeEffectEnum;
    /**
    * Adjust the playback speed of the video clip between 0 (paused) and 10 (10x normal speed) where 1 is normal speed (defaults to 1). Adjusting the speed will also adjust the duration of the clip and may require you to  adjust the Clip length. For example, if you set speed to 0.5, the clip will need to be 2x as long to play the entire video (i.e. original length / 0.5). If you set speed to 2, the clip will need to be half as long to play the entire video (i.e. original length / 2).
    */
    'speed'?: number;
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
            "name": "trim",
            "baseName": "trim",
            "type": "number"
        },
        {
            "name": "volume",
            "baseName": "volume",
            "type": "number"
        },
        {
            "name": "volumeEffect",
            "baseName": "volumeEffect",
            "type": "VideoAsset.VolumeEffectEnum"
        },
        {
            "name": "speed",
            "baseName": "speed",
            "type": "number"
        },
        {
            "name": "crop",
            "baseName": "crop",
            "type": "Crop"
        }    ];

    static getAttributeTypeMap() {
        return VideoAsset.attributeTypeMap;
    }
}

export namespace VideoAsset {
    export enum VolumeEffectEnum {
        FadeIn = <any> 'fadeIn',
        FadeOut = <any> 'fadeOut',
        FadeInFadeOut = <any> 'fadeInFadeOut'
    }
}
