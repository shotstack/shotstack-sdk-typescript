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
* In and out transitions for a clip - i.e. fade in and fade out
*/
export class Transition {
    /**
    * The transition in. Available transitions are:   <ul>     <li>`fade` - fade in</li>     <li>`reveal` - reveal from left to right</li>     <li>`wipeLeft` - fade across screen to the left</li>     <li>`wipeRight` - fade across screen to the right</li>     <li>`slideLeft` - move slightly left and fade in</li>     <li>`slideRight` - move slightly right and fade in</li>     <li>`slideUp` - move slightly up and fade in</li>     <li>`slideDown` - move slightly down and fade in</li>     <li>`carouselLeft` - slide in from right to left</li>     <li>`carouselRight` - slide in from left to right</li>     <li>`carouselUp` - slide in from bottom to top</li>     <li>`carouselDown` - slide in from top to bottom</li>     <li>`shuffleTopRight` - rotate in from top right</li>     <li>`shuffleRightTop` - rotate in from right top</li>     <li>`shuffleRightBottom` - rotate in from right bottom</li>     <li>`shuffleBottomRight` - rotate in from bottom right</li>     <li>`shuffleBottomLeft` - rotate in from bottom left</li>     <li>`shuffleLeftBottom` - rotate in from left bottom</li>     <li>`shuffleLeftTop` - rotate in from left top</li>     <li>`shuffleTopLeft` - rotate in from top left</li>     <li>`zoom` - fast zoom in</li>   </ul> The transition speed can also be controlled by appending `Fast` or `Slow` to the transition, e.g. `fadeFast` or `CarouselLeftSlow`.
    */
    '_in'?: Transition.InEnum;
    /**
    * The transition out. Available transitions are:   <ul>     <li>`fade` - fade out</li>     <li>`reveal` - reveal from right to left</li>     <li>`wipeLeft` - fade across screen to the left</li>     <li>`wipeRight` - fade across screen to the right</li>     <li>`slideLeft` - move slightly left and fade out</li>     <li>`slideRight` - move slightly right and fade out</li>     <li>`slideUp` - move slightly up and fade out</li>     <li>`slideDown` - move slightly down and fade out</li>     <li>`carouselLeft` - slide out from right to left</li>     <li>`carouselRight` - slide out from left to right</li>     <li>`carouselUp` - slide out from bottom to top</li>     <li>`carouselDown` - slide out from top  to bottom</li>     <li>`shuffleTopRight` - rotate out from top right</li>     <li>`shuffleRightTop` - rotate out from right top</li>     <li>`shuffleRightBottom` - rotate out from right bottom</li>     <li>`shuffleBottomRight` - rotate out from bottom right</li>     <li>`shuffleBottomLeft` - rotate out from bottom left</li>     <li>`shuffleLeftBottom` - rotate out from left bottom</li>     <li>`shuffleLeftTop` - rotate out from left top</li>     <li>`shuffleTopLeft` - rotate out from top left</li>     <li>`zoom` - fast zoom out</li>   </ul> The transition speed can also be controlled by appending `Fast` or `Slow` to the transition, e.g. `fadeFast` or `CarouselLeftSlow`.
    */
    'out'?: Transition.OutEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "_in",
            "baseName": "in",
            "type": "Transition.InEnum"
        },
        {
            "name": "out",
            "baseName": "out",
            "type": "Transition.OutEnum"
        }    ];

    static getAttributeTypeMap() {
        return Transition.attributeTypeMap;
    }
}

export namespace Transition {
    export enum InEnum {
        FADE = <any> 'fade',
        FADE_SLOW = <any> 'fadeSlow',
        FADE_FAST = <any> 'fadeFast',
        REVEAL = <any> 'reveal',
        REVEAL_SLOW = <any> 'revealSlow',
        REVEAL_FAST = <any> 'revealFast',
        WIPE_LEFT = <any> 'wipeLeft',
        WIPE_LEFT_SLOW = <any> 'wipeLeftSlow',
        WIPE_LEFT_FAST = <any> 'wipeLeftFast',
        WIPE_RIGHT = <any> 'wipeRight',
        WIPE_RIGHT_SLOW = <any> 'wipeRightSlow',
        WIPE_RIGHT_FAST = <any> 'wipeRightFast',
        SLIDE_LEFT = <any> 'slideLeft',
        SLIDE_LEFT_SLOW = <any> 'slideLeftSlow',
        SLIDE_LEFT_FAST = <any> 'slideLeftFast',
        SLIDE_RIGHT = <any> 'slideRight',
        SLIDE_RIGHT_SLOW = <any> 'slideRightSlow',
        SLIDE_RIGHT_FAST = <any> 'slideRightFast',
        SLIDE_UP = <any> 'slideUp',
        SLIDE_UP_SLOW = <any> 'slideUpSlow',
        SLIDE_UP_FAST = <any> 'slideUpFast',
        SLIDE_DOWN = <any> 'slideDown',
        SLIDE_DOWN_SLOW = <any> 'slideDownSlow',
        SLIDE_DOWN_FAST = <any> 'slideDownFast',
        CAROUSEL_LEFT = <any> 'carouselLeft',
        CAROUSEL_LEFT_SLOW = <any> 'carouselLeftSlow',
        CAROUSEL_LEFT_FAST = <any> 'carouselLeftFast',
        CAROUSEL_RIGHT = <any> 'carouselRight',
        CAROUSEL_RIGHT_SLOW = <any> 'carouselRightSlow',
        CAROUSEL_RIGHT_FAST = <any> 'carouselRightFast',
        CAROUSEL_UP = <any> 'carouselUp',
        CAROUSEL_UP_SLOW = <any> 'carouselUpSlow',
        CAROUSEL_UP_FAST = <any> 'carouselUpFast',
        CAROUSEL_DOWN = <any> 'carouselDown',
        CAROUSEL_DOWN_SLOW = <any> 'carouselDownSlow',
        CAROUSEL_DOWN_FAST = <any> 'carouselDownFast',
        SHUFFLE_TOP_RIGHT = <any> 'shuffleTopRight',
        SHUFFLE_TOP_RIGHT_SLOW = <any> 'shuffleTopRightSlow',
        SHUFFLE_TOP_RIGHT_FAST = <any> 'shuffleTopRightFast',
        SHUFFLE_RIGHT_TOP = <any> 'shuffleRightTop',
        SHUFFLE_RIGHT_TOP_SLOW = <any> 'shuffleRightTopSlow',
        SHUFFLE_RIGHT_TOP_FAST = <any> 'shuffleRightTopFast',
        SHUFFLE_RIGHT_BOTTOM = <any> 'shuffleRightBottom',
        SHUFFLE_RIGHT_BOTTOM_SLOW = <any> 'shuffleRightBottomSlow',
        SHUFFLE_RIGHT_BOTTOM_FAST = <any> 'shuffleRightBottomFast',
        SHUFFLE_BOTTOM_RIGHT = <any> 'shuffleBottomRight',
        SHUFFLE_BOTTOM_RIGHT_SLOW = <any> 'shuffleBottomRightSlow',
        SHUFFLE_BOTTOM_RIGHT_FAST = <any> 'shuffleBottomRightFast',
        SHUFFLE_BOTTOM_LEFT = <any> 'shuffleBottomLeft',
        SHUFFLE_BOTTOM_LEFT_SLOW = <any> 'shuffleBottomLeftSlow',
        SHUFFLE_BOTTOM_LEFT_FAST = <any> 'shuffleBottomLeftFast',
        SHUFFLE_LEFT_BOTTOM = <any> 'shuffleLeftBottom',
        SHUFFLE_LEFT_BOTTOM_SLOW = <any> 'shuffleLeftBottomSlow',
        SHUFFLE_LEFT_BOTTOM_FAST = <any> 'shuffleLeftBottomFast',
        SHUFFLE_LEFT_TOP = <any> 'shuffleLeftTop',
        SHUFFLE_LEFT_TOP_SLOW = <any> 'shuffleLeftTopSlow',
        SHUFFLE_LEFT_TOP_FAST = <any> 'shuffleLeftTopFast',
        SHUFFLE_TOP_LEFT = <any> 'shuffleTopLeft',
        SHUFFLE_TOP_LEFT_SLOW = <any> 'shuffleTopLeftSlow',
        SHUFFLE_TOP_LEFT_FAST = <any> 'shuffleTopLeftFast',
        ZOOM = <any> 'zoom'
    }
    export enum OutEnum {
        FADE = <any> 'fade',
        FADE_SLOW = <any> 'fadeSlow',
        FADE_FAST = <any> 'fadeFast',
        REVEAL = <any> 'reveal',
        REVEAL_SLOW = <any> 'revealSlow',
        REVEAL_FAST = <any> 'revealFast',
        WIPE_LEFT = <any> 'wipeLeft',
        WIPE_LEFT_SLOW = <any> 'wipeLeftSlow',
        WIPE_LEFT_FAST = <any> 'wipeLeftFast',
        WIPE_RIGHT = <any> 'wipeRight',
        WIPE_RIGHT_SLOW = <any> 'wipeRightSlow',
        WIPE_RIGHT_FAST = <any> 'wipeRightFast',
        SLIDE_LEFT = <any> 'slideLeft',
        SLIDE_LEFT_SLOW = <any> 'slideLeftSlow',
        SLIDE_LEFT_FAST = <any> 'slideLeftFast',
        SLIDE_RIGHT = <any> 'slideRight',
        SLIDE_RIGHT_SLOW = <any> 'slideRightSlow',
        SLIDE_RIGHT_FAST = <any> 'slideRightFast',
        SLIDE_UP = <any> 'slideUp',
        SLIDE_UP_SLOW = <any> 'slideUpSlow',
        SLIDE_UP_FAST = <any> 'slideUpFast',
        SLIDE_DOWN = <any> 'slideDown',
        SLIDE_DOWN_SLOW = <any> 'slideDownSlow',
        SLIDE_DOWN_FAST = <any> 'slideDownFast',
        CAROUSEL_LEFT = <any> 'carouselLeft',
        CAROUSEL_LEFT_SLOW = <any> 'carouselLeftSlow',
        CAROUSEL_LEFT_FAST = <any> 'carouselLeftFast',
        CAROUSEL_RIGHT = <any> 'carouselRight',
        CAROUSEL_RIGHT_SLOW = <any> 'carouselRightSlow',
        CAROUSEL_RIGHT_FAST = <any> 'carouselRightFast',
        CAROUSEL_UP = <any> 'carouselUp',
        CAROUSEL_UP_SLOW = <any> 'carouselUpSlow',
        CAROUSEL_UP_FAST = <any> 'carouselUpFast',
        CAROUSEL_DOWN = <any> 'carouselDown',
        CAROUSEL_DOWN_SLOW = <any> 'carouselDownSlow',
        CAROUSEL_DOWN_FAST = <any> 'carouselDownFast',
        SHUFFLE_TOP_RIGHT = <any> 'shuffleTopRight',
        SHUFFLE_TOP_RIGHT_SLOW = <any> 'shuffleTopRightSlow',
        SHUFFLE_TOP_RIGHT_FAST = <any> 'shuffleTopRightFast',
        SHUFFLE_RIGHT_TOP = <any> 'shuffleRightTop',
        SHUFFLE_RIGHT_TOP_SLOW = <any> 'shuffleRightTopSlow',
        SHUFFLE_RIGHT_TOP_FAST = <any> 'shuffleRightTopFast',
        SHUFFLE_RIGHT_BOTTOM = <any> 'shuffleRightBottom',
        SHUFFLE_RIGHT_BOTTOM_SLOW = <any> 'shuffleRightBottomSlow',
        SHUFFLE_RIGHT_BOTTOM_FAST = <any> 'shuffleRightBottomFast',
        SHUFFLE_BOTTOM_RIGHT = <any> 'shuffleBottomRight',
        SHUFFLE_BOTTOM_RIGHT_SLOW = <any> 'shuffleBottomRightSlow',
        SHUFFLE_BOTTOM_RIGHT_FAST = <any> 'shuffleBottomRightFast',
        SHUFFLE_BOTTOM_LEFT = <any> 'shuffleBottomLeft',
        SHUFFLE_BOTTOM_LEFT_SLOW = <any> 'shuffleBottomLeftSlow',
        SHUFFLE_BOTTOM_LEFT_FAST = <any> 'shuffleBottomLeftFast',
        SHUFFLE_LEFT_BOTTOM = <any> 'shuffleLeftBottom',
        SHUFFLE_LEFT_BOTTOM_SLOW = <any> 'shuffleLeftBottomSlow',
        SHUFFLE_LEFT_BOTTOM_FAST = <any> 'shuffleLeftBottomFast',
        SHUFFLE_LEFT_TOP = <any> 'shuffleLeftTop',
        SHUFFLE_LEFT_TOP_SLOW = <any> 'shuffleLeftTopSlow',
        SHUFFLE_LEFT_TOP_FAST = <any> 'shuffleLeftTopFast',
        SHUFFLE_TOP_LEFT = <any> 'shuffleTopLeft',
        SHUFFLE_TOP_LEFT_SLOW = <any> 'shuffleTopLeftSlow',
        SHUFFLE_TOP_LEFT_FAST = <any> 'shuffleTopLeftFast',
        ZOOM = <any> 'zoom'
    }
}
