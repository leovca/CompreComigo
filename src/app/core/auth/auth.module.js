import angular from 'angular';
import routes from './auth.routes';
import config from './auth.config';

import { AuthLoginComponent } from './components/login/auth.login.component';

export default angular.module('app.modules.auth', [])
    .component('authLogin', AuthLoginComponent)
    .run(routes)
    .config(config)
    .name;

