import angular from 'angular';
import routes from './layout.app.routes';
import {LayoutAppComponent} from "./component/layout.app.component";

export default angular
    .module('app.layouts.app', [])
    .component('layoutAppComponent', LayoutAppComponent)
    .run(routes)
    .name;
