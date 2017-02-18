import './announcements.new.component.css';

export const AnnouncementNewComponent  = {
    template: require('./announcements.new.component.html'),
    controllerAs: 'vm',
    controller: class AnnouncementNewComponent {
        constructor(AnnouncementService) {
            'ngInject';
            this.announcementService = AnnouncementService;
        }

        $onInit() {

        }
    }
};