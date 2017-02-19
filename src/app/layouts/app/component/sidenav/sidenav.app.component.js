import './sidenav.app.component.css';

export const SidenavLayoutAppComponent  = {
    template: require('./sidenav.app.component.html'),
    controllerAs: 'vm',
    controller: class SidenavLayoutAppComponent {
        constructor(ProfileService, $mdSidenav) {
            'ngInject';
            this.profileService = ProfileService;
            this.$mdSidenav = $mdSidenav;

            this.toggleSidenav = this.buildToggler('left');
        }

        $onInit (){
            this.profileService.getUserProfile().then(
                (user) => {
                    this.user = user;
                    console.log(user)
                })
        }

        buildToggler(componentId) {
            return () =>  this.$mdSidenav(componentId).toggle();
        }
    }
};