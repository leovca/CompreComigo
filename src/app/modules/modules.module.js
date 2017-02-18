import angular from 'angular';

import dashboardModule from './dashboard/dashboard.module';
import announcementsModule from './announcement/announcement.module';
import profileModule from './profile/profile.module';
import routes from './modules.routes';


export default angular
  .module('app.modules', [
      dashboardModule,
      announcementsModule,
      profileModule
  ])
  .run(routes)
  .name;
