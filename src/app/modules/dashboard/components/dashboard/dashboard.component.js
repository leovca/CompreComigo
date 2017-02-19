import './dashboard.component.css';

export const DashboardComponent  = {
    template: require('./dashboard.component.html'),
    controllerAs: 'vm',
    controller: class DashboardComponent {
        constructor(ProfileService, $scope, AnnouncementService, $state, FirebaseService) {
            'ngInject';
            this.profileService = ProfileService;
            this.announcementService = AnnouncementService;
            this.firebaseService = FirebaseService;
            this.$scope = $scope;
            this.$state = $state;
        }

        $onInit() {
            this.users = [];
            this.profileService.getNeighbhoods((position)=>{
                this.$scope.$apply(() =>{
                    this.users.push(position);
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
                    this.$state.go('modules.announcements.show.details', {id: announcement.key})
                })
        }

        showAnnouncment(announcement){
            if(announcement && !announcement.users){
                return true;
            } else if(announcement && !announcement.users &&
                !announcement.users.hasOwnProperty(this.firebaseService.auth.currentUser.uid)) {
                return true;
            } else {
                return false;
            }
        }

        getAnnouncementMessage(type){
            if(type == 'near'){
                return "esta procurando alguém para"
            }
        }
    }
};