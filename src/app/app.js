import angular from 'angular';

import depedenciesModule from './dependencies/dependencies.module';
import layoutsModule from './layouts/layout.module';
import coreModule from './core/core.module';
import modulesModule from './modules/modules.module';

import '../style/app.css';
// import 'materialize-css/dist/css/materialize.min.css'
import 'bootstrap/dist/css/bootstrap.css'

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
    depedenciesModule,
    coreModule,
    layoutsModule,
    modulesModule
]);

export default MODULE_NAME;