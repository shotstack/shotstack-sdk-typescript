import localVarRequest from 'request';

export * from './asset';
export * from './assetRenderResponse';
export * from './assetResponse';
export * from './assetResponseAttributes';
export * from './assetResponseData';
export * from './audioAsset';
export * from './clip';
export * from './crop';
export * from './dIDGeneratedAsset';
export * from './dIDGeneratedAssetOptions';
export * from './dIDTextToAvatarOptions';
export * from './destinations';
export * from './edit';
export * from './elevenLabsGeneratedAsset';
export * from './elevenLabsGeneratedAssetOptions';
export * from './elevenLabsTextToSpeechOptions';
export * from './flipTransformation';
export * from './font';
export * from './generatedAsset';
export * from './generatedAssetErrorResponse';
export * from './generatedAssetErrorResponseData';
export * from './generatedAssetResponse';
export * from './generatedAssetResponseAttributes';
export * from './generatedAssetResponseData';
export * from './heyGenGeneratedAsset';
export * from './heyGenGeneratedAssetOptions';
export * from './heyGenTextToAvatarOptions';
export * from './htmlAsset';
export * from './imageAsset';
export * from './ingestErrorResponse';
export * from './ingestErrorResponseData';
export * from './lumaAsset';
export * from './mergeField';
export * from './muxDestination';
export * from './muxDestinationOptions';
export * from './offset';
export * from './output';
export * from './outputs';
export * from './outputsResponse';
export * from './poster';
export * from './probeResponse';
export * from './queuedResponse';
export * from './queuedResponseData';
export * from './queuedSourceResponse';
export * from './queuedSourceResponseData';
export * from './range';
export * from './renderResponse';
export * from './renderResponseData';
export * from './rendition';
export * from './renditionResponseAttributes';
export * from './rotateTransformation';
export * from './s3Destination';
export * from './s3DestinationOptions';
export * from './shotstackDestination';
export * from './shotstackGeneratedAsset';
export * from './shotstackGeneratedAssetOptions';
export * from './shotstackTextToImageOptions';
export * from './shotstackTextToSpeechOptions';
export * from './size';
export * from './skewTransformation';
export * from './soundtrack';
export * from './source';
export * from './sourceListResponse';
export * from './sourceResponse';
export * from './sourceResponseAttributes';
export * from './sourceResponseData';
export * from './template';
export * from './templateDataResponse';
export * from './templateDataResponseData';
export * from './templateListResponse';
export * from './templateListResponseData';
export * from './templateListResponseItem';
export * from './templateRender';
export * from './templateResponse';
export * from './templateResponseData';
export * from './thumbnail';
export * from './timeline';
export * from './titleAsset';
export * from './track';
export * from './transcription';
export * from './transfer';
export * from './transferResponse';
export * from './transferResponseAttributes';
export * from './transferResponseData';
export * from './transformation';
export * from './transition';
export * from './uploadResponse';
export * from './uploadResponseAttributes';
export * from './uploadResponseData';
export * from './videoAsset';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AssetRenderResponse } from './assetRenderResponse';
import { AssetResponse } from './assetResponse';
import { AssetResponseAttributes } from './assetResponseAttributes';
import { AssetResponseData } from './assetResponseData';
import { AudioAsset } from './audioAsset';
import { Clip } from './clip';
import { Crop } from './crop';
import { DIDGeneratedAsset } from './dIDGeneratedAsset';
import { DIDTextToAvatarOptions } from './dIDTextToAvatarOptions';
import { Destinations } from './destinations';
import { Edit } from './edit';
import { ElevenLabsGeneratedAsset } from './elevenLabsGeneratedAsset';
import { ElevenLabsTextToSpeechOptions } from './elevenLabsTextToSpeechOptions';
import { FlipTransformation } from './flipTransformation';
import { Font } from './font';
import { GeneratedAsset } from './generatedAsset';
import { GeneratedAssetErrorResponse } from './generatedAssetErrorResponse';
import { GeneratedAssetErrorResponseData } from './generatedAssetErrorResponseData';
import { GeneratedAssetResponse } from './generatedAssetResponse';
import { GeneratedAssetResponseAttributes } from './generatedAssetResponseAttributes';
import { GeneratedAssetResponseData } from './generatedAssetResponseData';
import { HeyGenGeneratedAsset } from './heyGenGeneratedAsset';
import { HeyGenTextToAvatarOptions } from './heyGenTextToAvatarOptions';
import { HtmlAsset } from './htmlAsset';
import { ImageAsset } from './imageAsset';
import { IngestErrorResponse } from './ingestErrorResponse';
import { IngestErrorResponseData } from './ingestErrorResponseData';
import { LumaAsset } from './lumaAsset';
import { MergeField } from './mergeField';
import { MuxDestination } from './muxDestination';
import { MuxDestinationOptions } from './muxDestinationOptions';
import { Offset } from './offset';
import { Output } from './output';
import { Outputs } from './outputs';
import { OutputsResponse } from './outputsResponse';
import { Poster } from './poster';
import { ProbeResponse } from './probeResponse';
import { QueuedResponse } from './queuedResponse';
import { QueuedResponseData } from './queuedResponseData';
import { QueuedSourceResponse } from './queuedSourceResponse';
import { QueuedSourceResponseData } from './queuedSourceResponseData';
import { Range } from './range';
import { RenderResponse } from './renderResponse';
import { RenderResponseData } from './renderResponseData';
import { Rendition } from './rendition';
import { RenditionResponseAttributes } from './renditionResponseAttributes';
import { RotateTransformation } from './rotateTransformation';
import { S3Destination } from './s3Destination';
import { S3DestinationOptions } from './s3DestinationOptions';
import { ShotstackDestination } from './shotstackDestination';
import { ShotstackGeneratedAsset } from './shotstackGeneratedAsset';
import { ShotstackTextToImageOptions } from './shotstackTextToImageOptions';
import { ShotstackTextToSpeechOptions } from './shotstackTextToSpeechOptions';
import { Size } from './size';
import { SkewTransformation } from './skewTransformation';
import { Soundtrack } from './soundtrack';
import { Source } from './source';
import { SourceListResponse } from './sourceListResponse';
import { SourceResponse } from './sourceResponse';
import { SourceResponseAttributes } from './sourceResponseAttributes';
import { SourceResponseData } from './sourceResponseData';
import { Template } from './template';
import { TemplateDataResponse } from './templateDataResponse';
import { TemplateDataResponseData } from './templateDataResponseData';
import { TemplateListResponse } from './templateListResponse';
import { TemplateListResponseData } from './templateListResponseData';
import { TemplateListResponseItem } from './templateListResponseItem';
import { TemplateRender } from './templateRender';
import { TemplateResponse } from './templateResponse';
import { TemplateResponseData } from './templateResponseData';
import { Thumbnail } from './thumbnail';
import { Timeline } from './timeline';
import { TitleAsset } from './titleAsset';
import { Track } from './track';
import { Transcription } from './transcription';
import { Transfer } from './transfer';
import { TransferResponse } from './transferResponse';
import { TransferResponseAttributes } from './transferResponseAttributes';
import { TransferResponseData } from './transferResponseData';
import { Transformation } from './transformation';
import { Transition } from './transition';
import { UploadResponse } from './uploadResponse';
import { UploadResponseAttributes } from './uploadResponseAttributes';
import { UploadResponseData } from './uploadResponseData';
import { VideoAsset } from './videoAsset';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AssetResponseAttributes.StatusEnum": AssetResponseAttributes.StatusEnum,
        "AudioAsset.EffectEnum": AudioAsset.EffectEnum,
        "Clip.FitEnum": Clip.FitEnum,
        "Clip.PositionEnum": Clip.PositionEnum,
        "Clip.EffectEnum": Clip.EffectEnum,
        "Clip.FilterEnum": Clip.FilterEnum,
        "DIDGeneratedAsset.ProviderEnum": DIDGeneratedAsset.ProviderEnum,
        "DIDTextToAvatarOptions.TypeEnum": DIDTextToAvatarOptions.TypeEnum,
        "DIDTextToAvatarOptions.AvatarEnum": DIDTextToAvatarOptions.AvatarEnum,
        "Edit.DiskEnum": Edit.DiskEnum,
        "ElevenLabsGeneratedAsset.ProviderEnum": ElevenLabsGeneratedAsset.ProviderEnum,
        "ElevenLabsTextToSpeechOptions.TypeEnum": ElevenLabsTextToSpeechOptions.TypeEnum,
        "ElevenLabsTextToSpeechOptions.VoiceEnum": ElevenLabsTextToSpeechOptions.VoiceEnum,
        "GeneratedAssetResponseAttributes.ProviderEnum": GeneratedAssetResponseAttributes.ProviderEnum,
        "GeneratedAssetResponseAttributes.TypeEnum": GeneratedAssetResponseAttributes.TypeEnum,
        "GeneratedAssetResponseAttributes.StatusEnum": GeneratedAssetResponseAttributes.StatusEnum,
        "HeyGenGeneratedAsset.ProviderEnum": HeyGenGeneratedAsset.ProviderEnum,
        "HeyGenTextToAvatarOptions.TypeEnum": HeyGenTextToAvatarOptions.TypeEnum,
        "HeyGenTextToAvatarOptions.AvatarEnum": HeyGenTextToAvatarOptions.AvatarEnum,
        "HeyGenTextToAvatarOptions.VoiceEnum": HeyGenTextToAvatarOptions.VoiceEnum,
        "HeyGenTextToAvatarOptions.AvatarStyleEnum": HeyGenTextToAvatarOptions.AvatarStyleEnum,
        "HeyGenTextToAvatarOptions.RatioEnum": HeyGenTextToAvatarOptions.RatioEnum,
        "HtmlAsset.PositionEnum": HtmlAsset.PositionEnum,
        "MuxDestinationOptions.PlaybackPolicyEnum": MuxDestinationOptions.PlaybackPolicyEnum,
        "Output.FormatEnum": Output.FormatEnum,
        "Output.ResolutionEnum": Output.ResolutionEnum,
        "Output.AspectRatioEnum": Output.AspectRatioEnum,
        "Output.FpsEnum": Output.FpsEnum,
        "Output.ScaleToEnum": Output.ScaleToEnum,
        "Output.QualityEnum": Output.QualityEnum,
        "RenderResponseData.StatusEnum": RenderResponseData.StatusEnum,
        "Rendition.FormatEnum": Rendition.FormatEnum,
        "Rendition.FitEnum": Rendition.FitEnum,
        "Rendition.ResolutionEnum": Rendition.ResolutionEnum,
        "Rendition.FpsEnum": Rendition.FpsEnum,
        "RenditionResponseAttributes.StatusEnum": RenditionResponseAttributes.StatusEnum,
        "ShotstackGeneratedAsset.ProviderEnum": ShotstackGeneratedAsset.ProviderEnum,
        "ShotstackTextToImageOptions.TypeEnum": ShotstackTextToImageOptions.TypeEnum,
        "ShotstackTextToSpeechOptions.TypeEnum": ShotstackTextToSpeechOptions.TypeEnum,
        "ShotstackTextToSpeechOptions.VoiceEnum": ShotstackTextToSpeechOptions.VoiceEnum,
        "ShotstackTextToSpeechOptions.LanguageEnum": ShotstackTextToSpeechOptions.LanguageEnum,
        "Soundtrack.EffectEnum": Soundtrack.EffectEnum,
        "SourceResponseAttributes.StatusEnum": SourceResponseAttributes.StatusEnum,
        "TitleAsset.StyleEnum": TitleAsset.StyleEnum,
        "TitleAsset.SizeEnum": TitleAsset.SizeEnum,
        "TitleAsset.PositionEnum": TitleAsset.PositionEnum,
        "Transcription.FormatEnum": Transcription.FormatEnum,
        "TransferResponseAttributes.StatusEnum": TransferResponseAttributes.StatusEnum,
        "Transition.InEnum": Transition.InEnum,
        "Transition.OutEnum": Transition.OutEnum,
        "VideoAsset.VolumeEffectEnum": VideoAsset.VolumeEffectEnum,
}

let typeMap: {[index: string]: any} = {
    "AssetRenderResponse": AssetRenderResponse,
    "AssetResponse": AssetResponse,
    "AssetResponseAttributes": AssetResponseAttributes,
    "AssetResponseData": AssetResponseData,
    "AudioAsset": AudioAsset,
    "Clip": Clip,
    "Crop": Crop,
    "DIDGeneratedAsset": DIDGeneratedAsset,
    "DIDTextToAvatarOptions": DIDTextToAvatarOptions,
    "Edit": Edit,
    "ElevenLabsGeneratedAsset": ElevenLabsGeneratedAsset,
    "ElevenLabsTextToSpeechOptions": ElevenLabsTextToSpeechOptions,
    "FlipTransformation": FlipTransformation,
    "Font": Font,
    "GeneratedAssetErrorResponse": GeneratedAssetErrorResponse,
    "GeneratedAssetErrorResponseData": GeneratedAssetErrorResponseData,
    "GeneratedAssetResponse": GeneratedAssetResponse,
    "GeneratedAssetResponseAttributes": GeneratedAssetResponseAttributes,
    "GeneratedAssetResponseData": GeneratedAssetResponseData,
    "HeyGenGeneratedAsset": HeyGenGeneratedAsset,
    "HeyGenTextToAvatarOptions": HeyGenTextToAvatarOptions,
    "HtmlAsset": HtmlAsset,
    "ImageAsset": ImageAsset,
    "IngestErrorResponse": IngestErrorResponse,
    "IngestErrorResponseData": IngestErrorResponseData,
    "LumaAsset": LumaAsset,
    "MergeField": MergeField,
    "MuxDestination": MuxDestination,
    "MuxDestinationOptions": MuxDestinationOptions,
    "Offset": Offset,
    "Output": Output,
    "Outputs": Outputs,
    "OutputsResponse": OutputsResponse,
    "Poster": Poster,
    "ProbeResponse": ProbeResponse,
    "QueuedResponse": QueuedResponse,
    "QueuedResponseData": QueuedResponseData,
    "QueuedSourceResponse": QueuedSourceResponse,
    "QueuedSourceResponseData": QueuedSourceResponseData,
    "Range": Range,
    "RenderResponse": RenderResponse,
    "RenderResponseData": RenderResponseData,
    "Rendition": Rendition,
    "RenditionResponseAttributes": RenditionResponseAttributes,
    "RotateTransformation": RotateTransformation,
    "S3Destination": S3Destination,
    "S3DestinationOptions": S3DestinationOptions,
    "ShotstackDestination": ShotstackDestination,
    "ShotstackGeneratedAsset": ShotstackGeneratedAsset,
    "ShotstackTextToImageOptions": ShotstackTextToImageOptions,
    "ShotstackTextToSpeechOptions": ShotstackTextToSpeechOptions,
    "Size": Size,
    "SkewTransformation": SkewTransformation,
    "Soundtrack": Soundtrack,
    "Source": Source,
    "SourceListResponse": SourceListResponse,
    "SourceResponse": SourceResponse,
    "SourceResponseAttributes": SourceResponseAttributes,
    "SourceResponseData": SourceResponseData,
    "Template": Template,
    "TemplateDataResponse": TemplateDataResponse,
    "TemplateDataResponseData": TemplateDataResponseData,
    "TemplateListResponse": TemplateListResponse,
    "TemplateListResponseData": TemplateListResponseData,
    "TemplateListResponseItem": TemplateListResponseItem,
    "TemplateRender": TemplateRender,
    "TemplateResponse": TemplateResponse,
    "TemplateResponseData": TemplateResponseData,
    "Thumbnail": Thumbnail,
    "Timeline": Timeline,
    "TitleAsset": TitleAsset,
    "Track": Track,
    "Transcription": Transcription,
    "Transfer": Transfer,
    "TransferResponse": TransferResponse,
    "TransferResponseAttributes": TransferResponseAttributes,
    "TransferResponseData": TransferResponseData,
    "Transformation": Transformation,
    "Transition": Transition,
    "UploadResponse": UploadResponse,
    "UploadResponseAttributes": UploadResponseAttributes,
    "UploadResponseData": UploadResponseData,
    "VideoAsset": VideoAsset,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
