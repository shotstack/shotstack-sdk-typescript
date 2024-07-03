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

/**
* Options for the ElevenLabs text-to-speech service. Set the text to be converted to speech and choose a voice to set the speaking style. The output will be generated as an MP3 audio file available at the URL returned in the response.
*/
export class ElevenLabsTextToSpeechOptions {
    /**
    * The type of asset to generate - set to `text-to-speech` for text-to-speech.
    */
    'type': ElevenLabsTextToSpeechOptions.TypeEnum;
    /**
    * The text to convert to speech.
    */
    'text': string;
    /**
    * The voice to use for the text-to-speech conversion. Select a voice from the list of available voices: <ul>   <li>`Adam`</li>   <li>`Antoni`</li>   <li>`Arnold`</li>   <li>`Bella`</li>   <li>`Domi`</li>   <li>`Elli`</li>   <li>`Josh`</li>   <li>`Rachel`</li>   <li>`Sam`</li> </ul>
    */
    'voice': ElevenLabsTextToSpeechOptions.VoiceEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ElevenLabsTextToSpeechOptions.TypeEnum"
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string"
        },
        {
            "name": "voice",
            "baseName": "voice",
            "type": "ElevenLabsTextToSpeechOptions.VoiceEnum"
        }    ];

    static getAttributeTypeMap() {
        return ElevenLabsTextToSpeechOptions.attributeTypeMap;
    }
}

export namespace ElevenLabsTextToSpeechOptions {
    export enum TypeEnum {
        TEXT_TO_SPEECH = <any> 'text-to-speech'
    }
    export enum VoiceEnum {
        ADAM = <any> 'Adam',
        ANTONI = <any> 'Antoni',
        ARNOLD = <any> 'Arnold',
        BELLA = <any> 'Bella',
        DOMI = <any> 'Domi',
        ELLI = <any> 'Elli',
        JOSH = <any> 'Josh',
        RACHEL = <any> 'Rachel',
        SAM = <any> 'Sam'
    }
}
