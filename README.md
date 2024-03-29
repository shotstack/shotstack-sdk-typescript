# Shotstack Typescript SDK (Beta) <!-- omit in toc -->

Work in progress Typescript SDK for the Shotstack API.

### Examples

#### Edit API

Render a video:

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