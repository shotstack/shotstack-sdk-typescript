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
import { GoogleDriveDestinationOptions } from './googleDriveDestinationOptions';

/**
* Send rendered videos and assets to the [Google Drive](https://shotstack.io/docs/guide/serving-assets/destinations/google-drive/) cloud storage service. Google Drive uses OAuth and you must authenticate and link your Google account via  [dashboard](https://dashboard.shotstack.io/integrations/google-drive), not in the request.
*/
export class GoogleDriveDestination {
    /**
    * The destination to send assets to - set to `google-drive` for Google Drive.
    */
    'provider': string = 'google-drive';
    'options': GoogleDriveDestinationOptions;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "string"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "GoogleDriveDestinationOptions"
        }    ];

    static getAttributeTypeMap() {
        return GoogleDriveDestination.attributeTypeMap;
    }
}

