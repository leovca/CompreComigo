import angular from 'angular';
import routes from './layout.app.routes';
import {LayoutAppComponent} from "./component/layout.app.component";
import {SidenavLayoutAppComponent} from "./component/sidenav/sidenav.app.component";

export default angular
    .module('app.layouts.app', [])
    .component('layoutAppComponent', LayoutAppComponent)
    .component('sidenavLayoutAppComponent', SidenavLayoutAppComponent)
    .run(routes)
    .name;


