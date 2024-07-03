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