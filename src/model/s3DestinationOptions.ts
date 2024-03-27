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

/**
* Pass additional options to control how files are stored in S3.
*/
export class S3DestinationOptions {
    /**
    * Choose the region to send the file to. Must be a valid  [AWS region](https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_region) string like `us-east-1` or `ap-southeast-2`.
    */
    'region': string;
    /**
    * The bucket name to send files to. The bucket must exist in the AWS account before files can be sent.
    */
    'bucket': string;
    /**
    * A prefix for the file being sent. This is typically a folder name, i.e. `videos` or `customerId/videos`.
    */
    'prefix'?: string;
    /**
    * Use your own filename instead of the default render ID filename. Note: omit the file extension as this will be appended depending n the output format. Also `poster.jpg` and `-thumb.jpg` will be appended for poster and thumbnail images.
    */
    'filename'?: string;
    /**
    * Sets the S3 Access Control List (acl) permissions. Default is `private`. Must use a valid  S3 [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl).
    */
    'acl'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "region",
            "baseName": "region",
            "type": "string"
        },
        {
            "name": "bucket",
            "baseName": "bucket",
            "type": "string"
        },
        {
            "name": "prefix",
            "baseName": "prefix",
            "type": "string"
        },
        {
            "name": "filename",
            "baseName": "filename",
            "type": "string"
        },
        {
            "name": "acl",
            "baseName": "acl",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return S3DestinationOptions.attributeTypeMap;
    }
}

