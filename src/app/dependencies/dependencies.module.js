import angular from 'angular';
import config from './dependencies.config';
import uiRouter from 'angular-ui-router';

import 'angularfire';
import 'angular-material/angular-material.css';

import angularMaterial from 'angular-material';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularMessages from 'angular-messages';

export default angular
    .module('app.dependencies', [
        uiRouter,
        angularMaterial,
        angularAnimate,
        angularAria,
        angularMessages,
        'firebase'
    ])
    .config(config)
    .name;


