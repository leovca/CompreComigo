import angular from 'angular';

import { FirebaseService } from './firebase.service';

export default angular.module('app.modules.firebase', [])
    .service('FirebaseService', FirebaseService)
    .name;