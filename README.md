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
const basePath = 'https://api.shotstack.io/create/dev';

const CreateApi = new Shotstack.CreateApi(basePath);
CreateApi.setApiKey(CreateApiApiKeys.DeveloperKey, apiKey);

const assetId = '01ht4-dtfsp-e6s59-ktryg-3w27mn';

CreateApi.getGeneratedAsset(assetId).then((data) => {
  if (data.response.body.data.attributes.status === 'done') {
    console.log(data.response.body.data.attributes.url);
  }
});
```
