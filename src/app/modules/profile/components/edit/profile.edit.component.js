import './profile.edit.component.css';

export const ProfileEditComponent  = {
    template: require('./profile.edit.component.html'),
    controllerAs: 'vm',
    controller: class ProfileEditComponent {
        constructor() {
            'ngInject';
        }

        $onInit() {
        this.user_data = {
                name: 'Peppa Pig',
                address: 'Av. Epitácio Pessoa, João Pessoa, Paraíba'
            };
        }
    }
};