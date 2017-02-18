import './auth.login.component.css';

export const AuthLoginComponent  = {
    template: require('./auth.login.component.html'),
    controllerAs: 'vm',
    controller: class AuthLoginComponent {
        constructor($state) {
            'ngInject'; // Not actually needed but best practice to keep here incase dependencies needed in the future
            this.$state = $state;
        }

        $onInit() {
            this.credentials = {
                email: '',
                password: ''
            };

            this.inRequest = false;
        }

        autenticar(){
            this.inRequest = true;
            this.$auth.submitLogin(this.credentials)
                .then(() => {
                    this.$state.go('modules.dashboard')
                })
                .catch(() => {
                    //Todo: exibir erro no formulário
                    this.inRequest = false;
                });
        }
    }
};