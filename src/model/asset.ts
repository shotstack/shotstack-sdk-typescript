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
 * 
 * NOTE: This file is manually overwritten by the developer
 */

import { AudioAsset } from './audioAsset';
import { HtmlAsset } from './htmlAsset';
import { ImageAsset } from './imageAsset';
import { LumaAsset } from './lumaAsset';
import { TitleAsset } from './titleAsset';
import { VideoAsset } from './videoAsset';

/**
* The type of asset to display for the duration of the Clip. Value must be one of: <ul>   <li><a href=\"#tocs_videoasset\">VideoAsset</a></li>   <li><a href=\"#tocs_imageasset\">ImageAsset</a></li>   <li><a href=\"#tocs_titleasset\">TitleAsset</a></li>   <li><a href=\"#tocs_htmlasset\">HtmlAsset</a></li>   <li><a href=\"#tocs_audioasset\">AudioAsset</a></li>   <li><a href=\"#tocs_lumaasset\">LumaAsset</a></li> </ul>
*/
export type Asset = AudioAsset | HtmlAsset | ImageAsset | LumaAsset | TitleAsset | VideoAsset;
