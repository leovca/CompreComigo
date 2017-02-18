import angular from 'angular';
import routes from './companhias.routes';

import { CompanhiasListComponent } from './components/list/companhias.list.component'
import { CompanhiaShowComponent } from './components/show/companhias.show.component'
import { CompanhiasService } from './companhias.service';


export default angular.module('app.modules.companhias', [])
    .service('CompanhiasService', CompanhiasService)
    .component('companhiasListComponent', CompanhiasListComponent)
    .component('companhiaShowComponent', CompanhiaShowComponent)
    .run(routes)
    .name;

