import { NativeModules } from 'react-native';
import Reactotron, {
  openInEditor,
  trackGlobalErrors,
} from 'reactotron-react-native';
import { reactotronRedux as reduxPlugin } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

let packagerHostname = 'localhost';

if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;

  packagerHostname = scriptURL.split('://')[1].split(':')[0];
}

if (__DEV__) {
  // https://github.com/infinitered/reactotron for more options!
  Reactotron.configure({ name: 'ReactNativeFirebaseApp', host: packagerHostname })
    .useReactNative()
    .use(openInEditor())
    .use(trackGlobalErrors()) // add all built-in react native plugins
    .use(reduxPlugin())
    .use(sagaPlugin())
    .connect();
    console.log=Reactotron.log;

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear();

  // Totally hacky, but this allows you to not both importing
  // reactotron-react-native on every file.
  // This is just DEV mode, so no big deal.
  // reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  console.tron = Reactotron;
}
