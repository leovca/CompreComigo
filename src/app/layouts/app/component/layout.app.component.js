import './layout.app.component.css';

export const LayoutAppComponent  = {
    template: require('./layout.app.component.html'),
    controllerAs: 'vm',
    controller: class LayoutAppComponent {
        constructor($mdSidenav, $mdMedia) {
            'ngInject';
            this.$mdSidenav = $mdSidenav;
            this.$mdMedia = $mdMedia;

            this.toggleSidenav = this.buildToggler('left');
        }

        buildToggler(componentId) {
            return () =>  this.$mdSidenav(componentId).toggle();
        }
    }
};