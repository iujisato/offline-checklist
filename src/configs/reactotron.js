import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';

const { scriptURL } = NativeModules.SourceCode;
const scriptHostname = scriptURL.split('://')[1].split(':')[0];

Reactotron
  .configure({ host: scriptHostname })
  .useReactNative()
  .connect();
