import angular from 'angular';
import routes from './layout.blank.routes';
import {LayoutBlankComponent} from "./component/layout.blank.component";

export default angular
    .module('app.layouts.blank', [])
    .component('layoutBlankComponent', LayoutBlankComponent)
    .run(routes)
    .name;
