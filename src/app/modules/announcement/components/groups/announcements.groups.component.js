import './announcements.groups.component';

export const AnnouncementGroupsComponent  = {
    template: require('./announcements.groups.component.html'),
    controllerAs: 'vm',
    controller: class AnnouncementGroupsComponent {
        constructor(AnnouncementService, $scope, $state) {
            'ngInject';
            this.announcementService = AnnouncementService;
            this.$scope = $scope;
            this.$state = $state;
        }

        $onInit() {
            this.announcements = [];
            this.announcementService.getMyGroups((announcement)=>{
                this.$scope.$apply(()=>{
                    this.announcements.push(announcement);
                })
            });
        }

        showGroup(group){
            console.log(group)
            this.$state.go('modules.announcements.show.details',{id: group.key})
        }
    }
};