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
import { AudioAsset } from './audioAsset';
import { Crop } from './crop';
import { HtmlAsset } from './htmlAsset';
import { ImageAsset } from './imageAsset';
import { LumaAsset } from './lumaAsset';
import { Offset } from './offset';
import { TitleAsset } from './titleAsset';
import { VideoAsset } from './videoAsset';

/**
* The type of asset to display for the duration of the Clip. Value must be one of: <ul>   <li><a href=\"#tocs_videoasset\">VideoAsset</a></li>   <li><a href=\"#tocs_imageasset\">ImageAsset</a></li>   <li><a href=\"#tocs_titleasset\">TitleAsset</a></li>   <li><a href=\"#tocs_htmlasset\">HtmlAsset</a></li>   <li><a href=\"#tocs_audioasset\">AudioAsset</a></li>   <li><a href=\"#tocs_lumaasset\">LumaAsset</a></li> </ul>
*/
export class Asset {
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
    /**
    * Set the volume for the audio clip between 0 and 1 where 0 is muted and 1 is full volume (defaults to 1).
    */
    'volume'?: number;
    /**
    * The volume effect to apply to the video asset <ul>   <li>`fadeIn` - fade volume in only</li>   <li>`fadeOut` - fade volume out only</li>   <li>`fadeInFadeOut` - fade volume in and out</li> </ul>
    */
    'volumeEffect'?: Asset.VolumeEffectEnum;
    /**
    * Adjust the playback speed of the audio clip between 0 (paused) and 10 (10x normal speed), where 1 is normal speed (defaults to 1). Adjusting the speed will also adjust the duration of the clip and may require you to  adjust the Clip length. For example, if you set speed to 0.5, the clip will need to be 2x as long to play the entire audio (i.e. original length / 0.5). If you set speed to 2, the clip will need to be half as long to play the entire audio (i.e. original length / 2).
    */
    'speed'?: number;
    'crop'?: Crop;
    /**
    * The title text string - i.e. \"My Title\".
    */
    'text': string;
    /**
    * Uses a preset to apply font properties and styling to the title. <ul>   <li>`minimal`</li>   <li>`blockbuster`</li>   <li>`vogue`</li>   <li>`sketchy`</li>   <li>`skinny`</li>   <li>`chunk`</li>   <li>`chunkLight`</li>   <li>`marker`</li>   <li>`future`</li>   <li>`subtitle`</li> </ul>
    */
    'style'?: Asset.StyleEnum;
    /**
    * Set the text color using hexadecimal color notation. Transparency is supported by setting the first two characters of the hex string (opposite to HTML),  i.e. #80ffffff will be white with  50% transparency.
    */
    'color'?: string;
    /**
    * Set the relative size of the text using predefined sizes from xx-small to xx-large. <ul>   <li>`xx-small`</li>   <li>`x-small`</li>   <li>`small`</li>   <li>`medium`</li>   <li>`large`</li>   <li>`x-large`</li>   <li>`xx-large`</li> </ul>
    */
    'size'?: Asset.SizeEnum;
    /**
    * Apply a background color behind the HTML bounding box using. Set the text color using hexadecimal  color notation. Transparency is supported by setting the first two characters of the hex string  (opposite to HTML), i.e. #80ffffff will be white with 50% transparency.
    */
    'background'?: string;
    /**
    * Place the HTML in one of nine predefined positions within the HTML area. <ul>   <li>`top` - top (center)</li>   <li>`topRight` - top right</li>   <li>`right` - right (center)</li>   <li>`bottomRight` - bottom right</li>   <li>`bottom` - bottom (center)</li>   <li>`bottomLeft` - bottom left</li>   <li>`left` - left (center)</li>   <li>`topLeft` - top left</li>   <li>`center` - center</li> </ul>
    */
    'position'?: Asset.PositionEnum;
    'offset'?: Offset;
    /**
    * The HTML text string. See list of [supported HTML tags](https://shotstack.io/docs/guide/architecting-an-application/html-support#supported-html-tags).
    */
    'html': string;
    /**
    * The CSS text string to apply styling to the HTML. See list of  [support CSS properties](https://shotstack.io/docs/guide/architecting-an-application/html-support#supported-css-properties).
    */
    'css'?: string;
    /**
    * Set the width of the HTML asset bounding box in pixels. Text will wrap to fill the bounding box.
    */
    'width'?: number;
    /**
    * Set the width of the HTML asset bounding box in pixels. Text and elements will be masked if they exceed the  height of the bounding box.
    */
    'height'?: number;
    /**
    * The effect to apply to the audio asset <ul>   <li>`fadeIn` - fade volume in only</li>   <li>`fadeOut` - fade volume out only</li>   <li>`fadeInFadeOut` - fade volume in and out</li> </ul>
    */
    'effect'?: Asset.EffectEnum;

    static discriminator: string | undefined = "asset";

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
            "type": "Asset.VolumeEffectEnum"
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
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string"
        },
        {
            "name": "style",
            "baseName": "style",
            "type": "Asset.StyleEnum"
        },
        {
            "name": "color",
            "baseName": "color",
            "type": "string"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "Asset.SizeEnum"
        },
        {
            "name": "background",
            "baseName": "background",
            "type": "string"
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "Asset.PositionEnum"
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "Offset"
        },
        {
            "name": "html",
            "baseName": "html",
            "type": "string"
        },
        {
            "name": "css",
            "baseName": "css",
            "type": "string"
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number"
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number"
        },
        {
            "name": "effect",
            "baseName": "effect",
            "type": "Asset.EffectEnum"
        }    ];

    static getAttributeTypeMap() {
        return Asset.attributeTypeMap;
    }
}

export namespace Asset {
    export enum VolumeEffectEnum {
        FadeIn = <any> 'fadeIn',
        FadeOut = <any> 'fadeOut',
        FadeInFadeOut = <any> 'fadeInFadeOut'
    }
    export enum StyleEnum {
        Minimal = <any> 'minimal',
        Blockbuster = <any> 'blockbuster',
        Vogue = <any> 'vogue',
        Sketchy = <any> 'sketchy',
        Skinny = <any> 'skinny',
        Chunk = <any> 'chunk',
        ChunkLight = <any> 'chunkLight',
        Marker = <any> 'marker',
        Future = <any> 'future',
        Subtitle = <any> 'subtitle'
    }
    export enum SizeEnum {
        XxSmall = <any> 'xx-small',
        XSmall = <any> 'x-small',
        Small = <any> 'small',
        Medium = <any> 'medium',
        Large = <any> 'large',
        XLarge = <any> 'x-large',
        XxLarge = <any> 'xx-large'
    }
    export enum PositionEnum {
        Top = <any> 'top',
        TopRight = <any> 'topRight',
        Right = <any> 'right',
        BottomRight = <any> 'bottomRight',
        Bottom = <any> 'bottom',
        BottomLeft = <any> 'bottomLeft',
        Left = <any> 'left',
        TopLeft = <any> 'topLeft',
        Center = <any> 'center'
    }
    export enum EffectEnum {
        FadeIn = <any> 'fadeIn',
        FadeOut = <any> 'fadeOut',
        FadeInFadeOut = <any> 'fadeInFadeOut'
    }
}