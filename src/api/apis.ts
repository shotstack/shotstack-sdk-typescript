export * from './createApi';
import { CreateApi } from './createApi';
export * from './editApi';
import { EditApi } from './editApi';
export * from './ingestApi';
import { IngestApi } from './ingestApi';
export * from './serveApi';
import { ServeApi } from './serveApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [CreateApi, EditApi, IngestApi, ServeApi];
