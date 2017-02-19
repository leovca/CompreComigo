import angular from 'angular';
import routes from './announcement.routes';

import { AnnouncementNewComponent } from './components/new/announcements.new.component';
import { AnnouncementShowComponent } from './components/show/announcements.show.component';
import { AnnouncementChatComponent } from './components/chat/announcements.chat.component';
import { AnnouncementGroupsComponent } from './components/groups/announcements.groups.component';
import { AnnouncementService } from './announcement.service';


export default angular.module('app.modules.announcements', [])
    .service('AnnouncementService', AnnouncementService)
    .component('announcementNewComponent', AnnouncementNewComponent)
    .component('announcementShowComponent', AnnouncementShowComponent)
    .component('announcementChatComponent', AnnouncementChatComponent)
    .component('announcementGroupsComponent', AnnouncementGroupsComponent)
    .run(routes)
    .name;

