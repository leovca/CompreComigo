import './dashboard.component.css';

export const DashboardComponent  = {
    template: require('./dashboard.component.html'),
    controllerAs: 'vm',
    controller: class DashboardComponent {
        constructor(ProfileService, $scope, AnnouncementService, $state) {
            'ngInject';
            this.profileService = ProfileService;
            this.announcementService = AnnouncementService;
            this.$scope = $scope;
            this.$state = $state;
        }

        $onInit() {
            this.users = [];
            this.profileService.getNeighbhoods((position)=>{
                this.$scope.$apply(() =>{
                    this.users.push(position);
                    console.log(this.users);
                });
            });


            this.announcements = [];
            this.announcementService.getMyInvintesStream((announcement) => {
                this.$scope.$apply(() => {
                    this.announcements.unshift(announcement);
                });
            });
        }

        join(announcement) {
            this.announcementService.join(announcement)
                .then(()=>{
                    this.$state.go('modules.announcements.show', {id: announcement.key})
                })
        }

        getAnnouncementMessage(type){
            if(type == 'near'){
                return "esta procurando alguém para"
            }
        }
    }
};