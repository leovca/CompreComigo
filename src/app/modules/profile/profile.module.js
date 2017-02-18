import angular from 'angular';
import routes from './profile.routes';

import { ProfileEditComponent } from './components/edit/profile.edit.component'
import { ProfileService } from './profile.service';


export default angular.module('app.modules.profile', [])
    .service('ProfileService', ProfileService)
    .component('profileEditComponent', ProfileEditComponent)
    .run(routes)
    .name;

