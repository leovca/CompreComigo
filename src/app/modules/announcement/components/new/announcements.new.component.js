import './announcements.new.component.css';

export const AnnouncementNewComponent  = {
    template: require('./announcements.new.component.html'),
    controllerAs: 'vm',
    controller: class AnnouncementNewComponent {
        constructor(AnnouncementService, $state) {
            'ngInject';
            this.announcementService = AnnouncementService;
            this.$state = $state;
        }

        $onInit() {
            this.announcement = {
                title: '',
                description: '',
                visibility: ''
            }
        }

        save(){
            this.announcementService.saveAnnouncement(this.announcement)
                .then(()=>{
                    this.$state.go('modules.dashboard')
                });
        }
    }
};