import angular from 'angular';
import routes from './dashboard.routes';

import {DashboardComponent} from './components/dashboard/dashboard.component';

export default angular.module('app.modules.dashboard', [])
    .component('dashboardComponent', DashboardComponent)
    .run(routes)
    .name;

