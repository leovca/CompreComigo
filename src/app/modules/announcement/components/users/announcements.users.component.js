import './announcements.users.component.css';

export const AnnouncementUsersComponent  = {
    template: require('./announcements.users.component.html'),
    controllerAs: 'vm',
    controller: class AnnouncementUsersComponent {
        constructor(AnnouncementService, $stateParams, $scope) {
            'ngInject';
            this.announcementService = AnnouncementService;
            this.$stateParams = $stateParams;
            this.$scope = $scope;
        }

        $onInit() {
            this.users = [];
            this.announcementService.getUsers(this.$stateParams.id, (user)=> {
                this.$scope.$apply(()=>{
                    this.users.push(user);
                });
            });
        }
    }
};