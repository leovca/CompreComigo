import angular from 'angular';
import routes from './announcement.routes';

import { AnnouncementNewComponent } from './components/new/announcements.new.component';
import { AnnouncementShowComponent } from './components/show/announcements.show.component';
import { AnnouncementDetailsComponent } from './components/details/announcements.details.component';
import { AnnouncementUsersComponent } from './components/users/announcements.users.component';
import { AnnouncementChatComponent } from './components/chat/announcements.chat.component';
import { AnnouncementPagamentoComponent } from './components/pagamento/announcements.pagamento.component';
import { AnnouncementGroupsComponent } from './components/groups/announcements.groups.component';
import { AnnouncementPaymentComponent } from './components/payment/announcements.payment.component';
import { AnnouncementService } from './announcement.service';


export default angular.module('app.modules.announcements', [])
    .service('AnnouncementService', AnnouncementService)
    .component('announcementNewComponent', AnnouncementNewComponent)
    .component('announcementShowComponent', AnnouncementShowComponent)
    .component('announcementDetailsComponent', AnnouncementDetailsComponent)
    .component('announcementUsersComponent', AnnouncementUsersComponent)
    .component('announcementChatComponent', AnnouncementChatComponent)
    .component('announcementPagamentoComponent', AnnouncementPagamentoComponent)
    .component('announcementGroupsComponent', AnnouncementGroupsComponent)
    .component('announcementPaymentComponent', AnnouncementPaymentComponent)
    .run(routes)
    .name;

