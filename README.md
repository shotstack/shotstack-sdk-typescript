# Shotstack Typescript SDK (Beta) <!-- omit in toc -->

Work in progress Typescript SDK for the Shotstack API.

### Examples

#### Edit API

Render a video (trim start and end):

```javascript
import Shotstack, { EditApiApiKeys } from './dist/index.js';

const apiKey = 'YOUR_API_KEY';
const basePath = 'https://api.shotstack.io/edit/v1';

const EditApi = new Shotstack.EditApi(basePath);
EditApi.setApiKey(EditApiApiKeys.DeveloperKey, apiKey);

const videoAsset = new Shotstack.VideoAsset();
videoAsset.src = 'https://s3-ap-southeast-2.amazonaws.com/shotstack-assets/footage/skater.hd.mp4';
videoAsset.trim = 3;

const videoClip = new Shotstack.Clip();
videoClip.asset = videoAsset;
videoClip.start = 0;
videoClip.length = 8;

const track = new Shotstack.Track();
track.clips = [videoClip];

const timeline = new Shotstack.Timeline();
timeline.tracks = [track];

const mux = new Shotstack.MuxDestination();

const output = new Shotstack.Output();
output.format = Shotstack.Output.FormatEnum.MP4;
output.resolution = Shotstack.Output.ResolutionEnum.SD;
output.destinations = [mux];

const edit = new Shotstack.Edit();
edit.timeline = timeline;
edit.output = output;

EditApi.postRender(edit).then((data) => {
  console.log(data.response.body);
});
```

Check render status:

```javascript
import Shotstack, { EditApiApiKeys } from './dist/index.js';

const apiKey = 'YOUR_API_KEY';
const basePath = 'https://api.shotstack.io/edit/v1';

const EditApi = new Shotstack.EditApi(basePath);
EditApi.setApiKey(EditApiApiKeys.DeveloperKey, apiKey);

const renderId = 'RENDER_ID'; // get this from the response of the postRender method

EditApi.getRender(renderId, { data: false }).then((data) => {
  if (data.response.body.response.status === 'done') {
    console.log(data.response.body.response.url);
  }
});
```

#### Ingest API

Ingest a video and create a rendition:

```javascript
import Shotstack, { IngestApiApiKeys } from './dist/index.js';

const apiKey = 'YOUR_API_KEY';
const basePath = 'https://api.shotstack.io/ingest/v1';

const IngestApi = new Shotstack.IngestApi(basePath);
IngestApi.setApiKey(IngestApiApiKeys.DeveloperKey, apiKey);

const size = new Shotstack.Size();
size.width = 1280;
size.height = 720;

const rendition = new Shotstack.Rendition();
rendition.format = Shotstack.Rendition.FormatEnum.MP4;
rendition.size = size;

const outputs = new Shotstack.Outputs();
outputs.renditions = [rendition];

const source = new Shotstack.Source();
source.url = 'https://github.com/shotstack/test-media/raw/main/captioning/scott-ko.mp4';
source.outputs = outputs;

IngestApi.postSource(source).then((data) => {
  console.log(data.response.body);
});
```

Get source and rendition details:

```javascript
import Shotstack, { IngestApiApiKeys } from './dist/index.js';

const apiKey = 'YOUR_API_KEY';
const basePath = 'https://api.shotstack.io/ingest/v1';

const IngestApi = new Shotstack.IngestApi(basePath);
IngestApi.setApiKey(IngestApiApiKeys.DeveloperKey, apiKey);

const sourceId = 'zzy89yhy-1w4y-xe41-t3v6-1gafvp0qmhvz';

IngestApi.getSource(sourceId).then((data) => {
  if (data.response.body.data.attributes.status === 'ready') {
    console.log('Source:', data.response.body.data.attributes.source);

    if (data.response.body.data.attributes.outputs.renditions[0].status === 'ready') {
      console.log('Rendition:', data.response.body.data.attributes.outputs.renditions[0].url);
    }
  }
});
```

#### Create API

Generate an image using Shotstack text-to-image service

```javascript
import Shotstack, { CreateApiApiKeys } from './dist/index.js';

const apiKey = 'YOUR_API_KEY';
const basePath = 'https://api.shotstack.io/create/v1';

const CreateApi = new Shotstack.CreateApi(basePath);
CreateApi.setApiKey(CreateApiApiKeys.DeveloperKey, apiKey);

const shotstackTextToImageOptions = new Shotstack.ShotstackTextToImageOptions();
shotstackTextToImageOptions.prompt = 'A detailed realistic photograph of Mars, showcasing its orange-red surface and dark outer space in the background with stars';
shotstackTextToImageOptions.width = 1024;
shotstackTextToImageOptions.height = 1024;

const shotstackTextToImage = new Shotstack.ShotstackGeneratedAsset();
shotstackTextToImage.options = shotstackTextToImageOptions;

CreateApi.postGenerateAsset(shotstackTextToImage).then((data) => {
  console.log(data.response.body);
});
```

Check generation status:

```javascript
import Shotstack, { CreateApiApiKeys } from './dist/index.js';

const apiKey = 'YOUR_API_KEY';
const basePath = 'https://api.shotstack.io/create/v1';

const CreateApi = new Shotstack.CreateApi(basePath);
CreateApi.setApiKey(CreateApiApiKeys.DeveloperKey, apiKey);

const assetId = '01ht4-dtfsp-e6s59-ktryg-3w27mn';

CreateApi.getGeneratedAsset(assetId).then((data) => {
  if (data.response.body.data.attributes.status === 'done') {
    console.log(data.response.body.data.attributes.url);
  }
});
```

#### Serve API

Transfer a file to a destination (Pexels to AWS S3):

```javascript
import Shotstack, { ServeApiApiKeys } from './dist/index.js';

const apiKey = 'YOUR_API_KEY';
const basePath = 'https://api.shotstack.io/serve/v1';

const ServeApi = new Shotstack.ServeApi(basePath);
ServeApi.setApiKey(ServeApiApiKeys.DeveloperKey, apiKey);

const s3DestinationOptions = new Shotstack.S3DestinationOptions();
s3DestinationOptions.region = 'ap-southeast-2';
s3DestinationOptions.bucket = 'my-bucket';
s3DestinationOptions.prefix = 'testing';
s3DestinationOptions.filename = 'photo';
s3DestinationOptions.acl = 'public-read';

const s3Destination = new Shotstack.S3Destination();
s3Destination.options = s3DestinationOptions;

const transfer = new Shotstack.Transfer();
transfer.url = 'https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg';
transfer.id = 'MY_ASSET_ID';
transfer.destinations = [s3Destination];

ServeApi.postServeAsset(transfer).then((data) => {
  console.log(data.response.body);
});
```

Get asset details:

```javascript
import Shotstack, { ServeApiApiKeys } from './dist/index.js';

const apiKey = 'YOUR_API_KEY';
const basePath = 'https://api.shotstack.io/serve/v1';

const ServeApi = new Shotstack.ServeApi(basePath);
ServeApi.setApiKey(ServeApiApiKeys.DeveloperKey, apiKey);

const assetId = 'MY_ASSET_ID'; // User created asset ID, render ID or source/rendition ID

ServeApi.getAssetByRenderId(assetId).then((data) => {
  if (data.response.body.data[0].attributes.status === 'ready') {
    ServeApi.getAsset(data.response.body.data[0].attributes.id).then((data) => {
      console.log(data.response.body.data.attributes.url);
    });
  }
});
```