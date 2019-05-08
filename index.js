/**
 * @format
 */

import {AppRegistry} from "react-native";
import App from "./src";      //caminho da /index
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
