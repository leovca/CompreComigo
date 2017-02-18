import angular from 'angular';
import BlankLayoutModule from './blank/layout.blank.module';
import AppLayoutModule from './app/layout.app.module';

export default angular
    .module('app.layouts', [
        BlankLayoutModule,
        AppLayoutModule
    ])
    .name;
