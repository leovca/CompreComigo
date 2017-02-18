import './layout.app.component.css';

export const LayoutAppComponent  = {
    template: require('./layout.app.component.html'),
    controllerAs: 'vm',
    controller: class LayoutAppComponent {
        constructor($mdSidenav) {
            'ngInject';
            this.$mdSidenav = $mdSidenav;
            this.toggleLeft = this.buildToggler('left');
            this.toggleRight = this.buildToggler('right');
        }

        buildToggler(componentId) {
            return function() {
                this.$mdSidenav(componentId).toggle();
            };
        }
    }
};