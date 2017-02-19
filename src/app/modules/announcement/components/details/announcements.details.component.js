import './announcements.details.component.css';

export const AnnouncementDetailsComponent  = {
    template: require('./announcements.details.component.html'),
    controllerAs: 'vm',
    controller: class AnnouncementDetailsComponent {
        constructor(AnnouncementService, $stateParams) {
            'ngInject';
            this.announcementService = AnnouncementService;
            this.$stateParams = $stateParams ;
        }

        $onInit() {
            console.log(this.$stateParams);
            this.announcementService.get(this.$stateParams.id).then((announcment)=>{
                this.announcement = announcment;
            })
        }

    }
};