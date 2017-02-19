import './dashboard.component.css';

export const DashboardComponent  = {
    template: require('./dashboard.component.html'),
    controllerAs: 'vm',
    controller: class DashboardComponent {
        constructor(ProfileService, $scope, AnnouncementService) {
            'ngInject';
            this.profileService = ProfileService;
            this.announcementService = AnnouncementService;
            this.$scope = $scope;
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


        getAnnouncementMessage(type){
            if(type == 'near'){
                return "esta procurando alguém para"
            }
        }
    }
};