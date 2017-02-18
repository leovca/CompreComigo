import './dashboard.component.css';

export const DashboardComponent  = {
    template: require('./dashboard.component.html'),
    controller: class DashboardComponent {
        constructor() {
            'ngInject';
        }

        $onInit() {
            this.newTodo = {
                title: '',
                selected: false
            };
        }
    }
};