import './auth.login.component.css';

export const AuthLoginComponent  = {
    template: require('./auth.login.component.html'),
    controllerAs: 'vm',
    controller: class AuthLoginComponent {
        constructor($state, FirebaseService) {
            'ngInject'; // Not actually needed but best practice to keep here incase dependencies needed in the future
            this.$state = $state;
            this.auth = FirebaseService.auth;
        }


        $onInit() {
            this.credentials = {
                email: '',
                password: ''
            };

            this.inRequest = false;
        }

        register(){
            this.auth
                .createUserWithEmailAndPassword(this.credentials.email, this.credentials.password)
                .catch(function(error) {
                    console.log(error)
                }).then(() => {
                    this.$state.go('modules.dashboard')
                })
        }

        autenticar(){
            this.inRequest = true;
            this.auth
                .signInWithEmailAndPassword(this.credentials.email, this.credentials.password)
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