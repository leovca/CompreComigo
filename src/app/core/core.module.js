import angular from 'angular';
import router from './../helpers/router/router.module';
import logger from './../helpers/logger/logger.module';
import routes from './core.routes';
import authModule from './auth/auth.module';
import firebaseModule from './firebase/firebase.module';

export default angular
    .module('app.core', [
        router,
        logger,
        firebaseModule,
        authModule
    ])
    .run(routes)
    .name;
