import { registerRootComponent } from 'expo';
// import App from './screens/splash';
// import App from './screens/LabDetails/';
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
