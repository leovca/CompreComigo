import angular from 'angular';

import dashboardModule from './dashboard/dashboard.module';
import companhiasModule from './companhias/companhias.module';
import routes from './modules.routes';


export default angular
  .module('app.modules', [
      dashboardModule,
      companhiasModule
  ])
  .run(routes)
  .name;
