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

import { GoogleCloudStorageDestination } from './googleCloudStorageDestination';
import { MuxDestination } from './muxDestination';
import { S3Destination } from './s3Destination';
import { ShotstackDestination } from './shotstackDestination';

/**
* A destination is a location where assets can be sent to for serving or hosting. Videos, images and audio files that are rendered by the [Edit API](#shotstack-edit) and [source](#tocs_source) and [rendition](#tocs_rendition) files generated by the [Ingest API](#shotstack-ingest) can be sent to destinations. You can also fetch a file from any public URL and [transfer](#transfer-asset) it to a destination. A file can be sent to one or more destinations including 3rd party destinations.  By default all ingested and generated assets are automatically sent to the [Shotstack hosting destination](https://shotstack.io/docs/guide/serving-assets/hosting/). You can [opt-out](https://shotstack.io/docs/guide/serving-assets/self-host/) from by setting the Shotstack destination **exclude** property to **true**.  The following destinations are available: <ul>   <li><a href=\"#tocs_shotstackdestination\">ShotstackDestination</a></li>   <li><a href=\"#tocs_muxdestination\">MuxDestination</a></li>   <li><a href=\"#tocs_s3destination\">S3Destination</a></li>   <li><a href=\"#tocs_googlecloudstoragedestination\">GoogleCloudStorageDestination</a></li> </ul>
*/
export type Destinations = GoogleCloudStorageDestination | MuxDestination | S3Destination | ShotstackDestination;
