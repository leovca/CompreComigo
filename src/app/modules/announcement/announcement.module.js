import angular from 'angular';
import routes from './announcement.routes';

import { AnnouncementNewComponent } from './components/new/announcements.new.component'
import { AnnouncementService } from './announcement.service';


export default angular.module('app.modules.announcements', [])
    .service('AnnouncementService', AnnouncementService)
    .component('announcementNewComponent', AnnouncementNewComponent)
    .run(routes)
    .name;

